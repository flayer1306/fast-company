import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    const getInputClasses = () => {
        return 'form-select' + (error ? ' is-invalid' : '');
    };
    return (
        <div className='mb-4'>
            <label htmlFor={name}>{label}</label>{' '}
            <div className="input-group has-validation">
                <input
                    type= {showPassword ? 'text' : type}
                    name= {name}
                    id= {name}
                    value = {value}
                    onChange={onChange}
                    className={getInputClasses()}
                />
                {type === 'password' && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
                    </button>
                )}
                {error && <div className='invalid-feedback'>{error}</div>}
            </div>
        </div>
    );
};

TextField.defaultProps = {
    type: 'text'
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};
