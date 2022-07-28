import React, {useState} from 'react';
import './components/banner.scss';

import PlanList from "../PlanList/PlanList";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Banner = () => {
    const BannerData = [
        {
            id: 1,
            popular: false,
            name: '1-month plan',
            perMonth: '$49.99 monthly',
            perDay: '128',
        },
        {
            id: 2,
            popular: true,
            name: '3-month plan',
            perMonth: '$69.99 quaterly',
            perDay: '083',
        },
        {
            id: 3,
            popular: false,
            name: 'Life time ⭐️',
            perMonth: '$99.99 one time fee',
            perDay: '055',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(1)
    const [modalData, setModalData] = useState(BannerData[1]);
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="banner">
            <Modal
                onClose={() => {setModalOpen(false);}}
                isOpen={modalOpen}
                modalData={modalData}
            />
            <div className="banner_title">
                Your 3-month weight loss plan
            </div>
            <div className="banner_sub_title">
                Walking app to help you reach your goal.
            </div>
            <PlanList
                cardData={BannerData}
                dataForModal={(elem) => {setModalData(elem)}}
                activeIndex={activeIndex}
                onCardClick={handleTabClick}
            />
            <Button
                openModal={() => {setModalOpen(true)}}
                disabled={!modalData.id}/>
        </div>
    );
};

export default Banner;
