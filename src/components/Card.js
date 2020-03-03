import React, { useEffect, useState } from 'react';

import Feels from './Feels';
import Minmax from './MinMax';
import { ReactComponent as Sun } from '../assets/clear.svg';
import { ReactComponent as Cloudy } from '../assets/cloudy.svg';
import { ReactComponent as Sunny } from '../assets/sunny.svg';
import { ReactComponent as Tunder } from '../assets/tunder.svg';

import './Card.css';
import response from '../current.json';
import DayCards from './DayCards';

const MONTNAMES = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];
const Card = props => {

    const [currentWeather, setCurrentWeather] = useState();

    const getIcon = (type) => {
        switch (type) {
            case 'Clear': return <Sun className='container-icon' />
            case 'Clouds': return <Cloudy className='container-icon' />
            case 'Rain': return <Tunder className='container-icon' />
            case 'Some CLouds': return <Sunny className='container-icon' />
            default: return <Sun className='container-icon' />;
        };
    };

    useEffect(() => {
        const weather = {
            id: response.dt,
            icon: response,
            temp: response.main.temp.toFixed(1),
            feelsLike: response.main.feels_like.toFixed(1),
            iconUrl: `http://openweathermap.org/img/w/${response.weather[0].icon}.png`,
            min: response.main.temp_min.toFixed(1),
            max: response.main.temp_max.toFixed(1),
        };
        setCurrentWeather(weather);
    }, [setCurrentWeather]);


    return (
        <React.Fragment>
            <div className='container'>
                {currentWeather &&
                    props.cards.map(card => {

                        let date = new Date(Date.parse(card[0].dt_txt));
                        date = date.toString().substring(0, 3) + ' ' + MONTNAMES[date.getMonth()] + '/' + date.getDate() + '/' + date.getFullYear();

                        return (
                            <div key={card[0].dt} className='displayed-cards'>
                                {getIcon(card[0].weather[0].main)}
                                <div className='container-temp' >{card[0].main.temp.toFixed(1)}° C</div>
                                <div>{date}</div>
                                <div className='container-details' >
                                    <Feels feelsGrades={card[0].main.feels_like.toFixed(1)} iconUrl={`http://openweathermap.org/img/w/${card[0].weather[0].icon}.png`} />
                                    <Minmax min={card[0].main.temp_min.toFixed(1)} max={card[0].main.temp_max.toFixed(1)} />
                                </div>
                                <p className='size'>Try it on a wider device</p>
                                <div className='container-hours' >
                                    {card.map(dc => {
                                        let hour = dc.dt_txt.substring(11, 16);
                                        return (
                                            <DayCards
                                                key={dc.dt}
                                                hour={hour}
                                                temp={dc.main.temp.toFixed(1)}
                                            />
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default Card;