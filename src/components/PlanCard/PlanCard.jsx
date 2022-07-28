import React from 'react';
import PropTypes from "prop-types";
import "./components/plan_card.scss";

import CardMain from "./components/CardMain";
import CardPerDay from "./components/CardPerDay";

const PlanCard = ({ cardInfo, dataForModal, onClick, active }) => {
    const getCardData = (id, name, month) => {
        dataForModal({id:id, name:name, perMonth:month});
        onClick();
    };

    return (
        <div
            className={`plan_card ${active ? 'active' : ''}`}
            onClick={() => {
                getCardData(cardInfo.id, cardInfo.name, cardInfo.perMonth)
            }}>
            <div className={`plan_card_indicator ${active ? 'active' : ''}`} />
            <div className="plan_card_content">
                <CardMain
                    month={cardInfo.perMonth}
                    popular={cardInfo.popular}
                    name={cardInfo.name}
                    activeState={active ? 'active' : ''}
                />
                <CardPerDay day={cardInfo.perDay} activeState={active ? 'active' : ''} />
            </div>
        </div>
    );
};

PlanCard.propTypes = {
    cardInfo: PropTypes.object.isRequired,
    dataForModal: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PlanCard;
