import React from 'react';
import Minmax from './MinMax';

const DayCards = props => {


    return (
        <div className='daily-cards'>
            <div className='daily-card'>
                <div className='daily-card-day' >{props.hour}</div>
                <div className='daily-card-temp' >{props.temp}º</div>
                <Minmax fromSingleCard min={props.min} max={props.max} />
            </div>
        </div>
    )
};

export default DayCards;