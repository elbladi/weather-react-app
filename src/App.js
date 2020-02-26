import React, { Suspense } from 'react';
import './App.css';

const DATES = [
  1582707600,
  1582718400,
  1582729200,
  1582740000,
  1582750800,
  1582761600
];


const App = () => {

  const dates = [];
  DATES.forEach(d => {
    const date = new Date(d * 1000);
    const utcString = date.toUTCString();
    const time = utcString.slice(-11, -4);
    console.log(`utcString: ${utcString}`);
    dates.push(time);
  });



  return (
    <Suspense className="App" fallback='Loading...!' >
      <ul>
        {dates.map(date => {
          return (<li key={date}>
            {date}
          </li>)
        })}
      </ul>
    </Suspense>
  );
}

export default App;
