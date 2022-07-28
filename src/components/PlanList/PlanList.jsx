import React from 'react';
import PropTypes from "prop-types";
import './components/plan_list.scss';

import PlanCard from "../PlanCard/PlanCard";

const PlanList = ({ cardData, dataForModal, activeIndex, onCardClick }) => {
    const handleClick = (index) => {
        onCardClick(index);
    };

    return (
        <div className="plan_list">
            <div className="plan_list_title">Choose your plan</div>
            {cardData.map((cardParam, index) => {
                return (
                    <PlanCard
                        key={cardParam.id}
                        cardInfo={cardParam}
                        dataForModal={dataForModal}
                        active={index === activeIndex}
                        onClick={() => handleClick(index)}
                    />
                    )
            })}
        </div>
    );
};

PlanList.propTypes = {
    cardData: PropTypes.array.isRequired,
    dataForModal: PropTypes.func.isRequired,
    activeIndex: PropTypes.number.isRequired,
    onCardClick: PropTypes.func.isRequired,
};

export default PlanList;
