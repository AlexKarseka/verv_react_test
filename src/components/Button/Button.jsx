import React from 'react';
import PropTypes from 'prop-types';
import './components/button.scss';

const Button = ({ openModal, disabled }) => {
    return (
        <div>
            <button
                className="button"
                type="button"
                onClick={openModal}
                disabled={disabled}
            >
                Get my plan
            </button>
        </div>
    );
};

Button.propTypes = {
    openModal: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default Button;
