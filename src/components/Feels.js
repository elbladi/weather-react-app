import React from 'react';
import PropTypes from 'prop-types';

const Feels = props => {
    return (
        <div className='container-feels'>
            <div>Feels like {props.feelsGrades}°</div>
            <img src={props.iconUrl} alt='icon' />
        </div>
    )
};

Feels.propTypes = {
    feelsGrades: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired
}

export default Feels;