import React from 'react';

const BookMark = (props) => {
    let bookmarkStyle = props.status ? 'bi bi-bookmark-star-fill' : 'bi bi-bookmark';

    return (
        <button className={bookmarkStyle}
                onClick={() => props.onToggleBookmark(props.id)}
        >
        </button>
    )
};

export default BookMark;