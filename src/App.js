import React, { Suspense, useEffect, useState } from 'react';
import Layout from './containers/Layout/Layout';
import Card from './components/Card';
import response from './someDays.json';

import './App.css';

const INIT = {
  "dt": 1582740000,
  "main": {
    "temp": 7.97,
    "feels_like": 1.79,
    "temp_min": 4.82,
    "temp_max": 7.97,
    "pressure": 1029,
    "sea_level": 1029,
    "grnd_level": 843,
    "humidity": 33,
    "temp_kf": 3.15
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "clouds": {
    "all": 56
  },
  "wind": {
    "speed": 4.78,
    "deg": 9
  },
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-02-26 18:00:00"
};

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let dates = {};
    response.list.map(card => {
      const currentDay = new Date(Date.parse(card.dt_txt)).getDate();
      if (dates[currentDay]) {
        dates[currentDay].push(card);
      } else {
        dates[currentDay] = [card];
      };
      return null;
    });
    const nuevoArray = Object.values(dates);
    console.log(nuevoArray);
    setCards(nuevoArray);
  }, [setCards]);

  const current = {
    url: 'http://openweathermap.org/img/w/04d.png',
    min: 1.11,
    max: 9.44,
    temp: 5.35,
    feelsLike: 12,
    main: 'Some CLouds'
  };


  return (

    <Suspense className="App" fallback='Loading...!' >
      <Layout mainIconImage={INIT.weather[0].main}>
        <Card cards={cards} />
      </Layout>
    </Suspense>
  );
}

export default App;
