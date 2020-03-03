import React from 'react';

const DayCards = props => {


    return (
        <div className='daily-cards'>
            <div className='daily-card'>
                <div className='daily-card-day' >{props.hour}</div>
                <div className='daily-card-temp' >{props.temp}º</div>
                <div>{props.min}</div>
                <div>{props.max}</div>
            </div>
        </div>
    )
};

export default DayCards;