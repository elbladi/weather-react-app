import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from './containers/Layout/Layout';
import Card from './components/Card';
import Spinner from './components/Spinner/Spinner';

import './App.css';

const apiKey = 'APIKEY';

const App = () => {
  const [cards, setCards] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  let coordinates = {};
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      coordinates.lat = position.coords.latitude;
      coordinates.lon = position.coords.longitude;
    });
  };

  useEffect(() => {
    let dates = {};

    if (coordinates.lat) {
      console.log('from coordinates');
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric&lat=${coordinates.lat}&lon=${coordinates.lon}`)
        .then(response => {
          response.data.list.map(card => {
            const currentDay = new Date(Date.parse(card.dt_txt)).getDate();
            if (dates[currentDay]) {
              dates[currentDay].push(card);
            } else {
              dates[currentDay] = [card];
            };
          });
          const newCardsFormat = Object.values(dates);
          setCity(response.data.city.name);
          setCards(newCardsFormat);
        })
        .catch(err => setError(err));
    } else {
      console.log('from hardcore');
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric&q=saltillo`)
        .then(response => {
          response.data.list.map(card => {
            const currentDay = new Date(Date.parse(card.dt_txt)).getDate();
            if (dates[currentDay]) {
              dates[currentDay].push(card);
            } else {
              dates[currentDay] = [card];
            };
          });
          const newCardsFormat = Object.values(dates);
          setCity(response.data.city.name);
          setCards(newCardsFormat);
        })
        .catch(err => setError(err));
    };
  }, [setCards]);

  return (
    <React.Fragment>
      {cards ? (
        !error && (<Layout city={city} mainIconImage={cards[0][0].weather[0].main}>
          <Card cards={cards} />
        </Layout>)
      ) : <Spinner />}
    </React.Fragment>
  );
}

export default App;
