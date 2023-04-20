import React from 'react';
import PropTypes from 'prop-types';

export const BookMark = ({ status, ...rest }) => {
    const bookmarkStyle = status
        ? 'bi bi-bookmark-star-fill'
        : 'bi bi-bookmark';

    return (
        <button {...rest}
            className={bookmarkStyle}
        ></button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};
