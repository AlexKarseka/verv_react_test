import React from 'react';
import PropTypes from "prop-types";

const CardPerDay = ({ day, activeState }) => {
    return (
        <div className={`plan_card_day ${activeState}`}>
            <div className="plan_card_day_small">$</div>
            <div className="plan_card_day_big">{day.substr(0, 1)}</div>
            <div className="plan_card_day_wrapper">
                <div className="plan_card_day_small">{day.substr(1, day.length)}</div>
                <div className="plan_card_day_text">per day</div>
            </div>
        </div>
    );
};

CardPerDay.propTypes = {
    day: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
};

export default CardPerDay;
