import React, { Suspense, useEffect, useCallback } from 'react';
import axios from 'axios';
import Layout from './containers/Layout/Layout';
import Card from './components/Card';

import './App.css';

const App = () => {

  // const dates = [];
  // DATES.forEach(d => {
  //   const date = new Date(1582740000 * 1000);
  //   const utcString = date.toUTCString();
  //   const time = utcString.slice(-11, -4);
  //   console.log(`utcString: ${utcString}`);
  //   dates.push(time);
  // });

  // useEffect(useCallback(() => {
  //   axios.get('http://localhost:5000/api/weather')
  //     .then(resp => console.log(resp.data.message))
  //     .catch(err => console.log(err));
  // }, []));

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
      <Layout mainIconImage={current.main}>
        <Card
          mainIcon={current.main}
          temp={current.temp.toFixed(1)}
          feelsLike={current.feelsLike.toFixed(1)}
          iconUrl={current.url}
          min={current.min.toFixed(1)}
          max={current.max.toFixed(1)}
        />
      </Layout>
    </Suspense>
  );
}

export default App;
