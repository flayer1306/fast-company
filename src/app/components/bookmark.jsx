import React from 'react';
import PropTypes from 'prop-types';

const BookMark = (props) => {
    const bookmarkStyle = props.status
        ? 'bi bi-bookmark-star-fill'
        : 'bi bi-bookmark';

    return (
        <button
            className={bookmarkStyle}
            onClick={() => props.onToggleBookmark(props.id)}
        ></button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default BookMark;
