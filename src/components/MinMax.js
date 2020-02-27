import React from 'react';
import { ReactComponent as Arrow } from '../assets/upArrow.svg';
import PropTypes from 'prop-types';

const Minmax = props => {

    const classes = [];
    classes.push('container-range');
    if (props.fromSingleCard) {
        classes.unshift('daily-card-range');
    };

    return (
        <div className={classes.join(' ')}>
            <div className='range'>
                <Arrow className='minArrow' />
                <div>{props.min}°</div>
            </div>
            <div className='range'>
                <Arrow className='maxArrow' />
                <div>{props.max}°</div>
            </div>
        </div>
    )
};

Minmax.propTypes = {
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired
}

export default Minmax;