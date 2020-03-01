import React from 'react';
import Minmax from './MinMax';

const DayCards = props => {


    return (
        <div className='daily-cards'>

            <div className='daily-card'>
                <div className='daily-card-day' >18</div>
                <div className='daily-card-temp' >16.4º</div>
                <Minmax fromSingleCard min='5' max='10' />
            </div>

        </div>
    )
};

export default DayCards;