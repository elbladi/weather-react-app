import React from 'react';

import Feels from './Feels';
import Minmax from './MinMax';
import { ReactComponent as Sun } from '../assets/clear.svg';
import { ReactComponent as Cloudy } from '../assets/cloudy.svg';
import { ReactComponent as Sunny } from '../assets/sunny.svg';
import { ReactComponent as Tunder } from '../assets/tunder.svg';

import './Card.css';
import DayCards from './DayCards';

const Card = props => {

    const getIcon = (type) => {
        switch (type) {
            case 'Clear': return <Sun className='container-icon' />
            case 'Clouds': return <Cloudy className='container-icon' />
            case 'Rain': return <Tunder className='container-icon' />
            case 'Some CLouds': return <Sunny className='container-icon' />
            default: return <Sun className='container-icon' />;
        };
    };

    const x = [1, 2, 3, 4];
    const y = [...x, 5, 6];

    return (
        <React.Fragment>
            <div className='container'>

                {x.map(card => {
                    return (
                        <div key={card} className='displayed-cards'>
                            {getIcon(props.mainIcon)}
                            <div className='container-temp' >{props.temp}° C</div>
                            <div className='container-details' >
                                <Feels feelsGrades={props.feelsLike} iconUrl={props.iconUrl} />
                                <Minmax min={props.min} max={props.max} />
                            </div>
                            <p className='size'>Try it on a wider device</p>
                            <div className='container-hours' >
                                {y.map(dc => <DayCards key={dc} />)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
};

export default Card;