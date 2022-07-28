import React from 'react';
import PropTypes from "prop-types";
import './components/modal.scss';

const Modal = ({ isOpen, onClose, modalData }) => {
    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`} onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}>
                <div className="modal_wrapper">
                    <div className="modal_close" onClick={onClose}>Close</div>
                    <div className="modal_title">This is your plan</div>
                    <div className="modal_data">
                        <div className="modal_left">Duration:</div>
                        <div className="modal_right">{modalData.name}</div>
                    </div>
                    <div className="modal_data">
                        <div className="modal_left">Price:</div>
                        <div className="modal_right">{modalData.perMonth}</div>
                    </div>
                    <button
                        className="modal_button"
                        type="button"
                        onClick={() => {
                            alert(`Payment ${modalData.perMonth}`)
                        }}
                    >
                        Proceed with payment
                    </button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    modalData: PropTypes.object.isRequired,
};

export default Modal;
