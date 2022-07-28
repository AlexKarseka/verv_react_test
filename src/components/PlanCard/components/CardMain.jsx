import React from 'react';
import PropTypes from "prop-types";

const CardMain = ({ popular, name, month, activeState }) => {
    return (
        <div>
            {popular ? (
                <div className={`plan_card_popular ${activeState}`}>Most popular</div>
            ) : (
                ''
            )}
            <div className={`plan_card_name ${activeState}`}>
                {name}
            </div>
            <div className={`plan_card_month ${activeState}`}>
                {month}
            </div>
        </div>
    );
};

CardMain.propTypes = {
    popular: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
};

export default CardMain;
