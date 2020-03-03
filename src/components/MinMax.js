import React from 'react';
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
                <div>Min: {props.min}°</div>
            </div>
            <div className='range'>
                <div>Max: {props.max}°</div>
            </div>
        </div>
    )
};

Minmax.propTypes = {
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired
}

export default Minmax;