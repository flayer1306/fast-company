import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ type, name, onChange, value }) => {
    return (
        <div>
            <input
                type ={type}
                name ={name}
                id ={name}
                placeholder={name}
                className='w-100'
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

Search.defaultProps = {
    type: 'text'
};

Search.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};
