import React from 'react';
import PropTypes from 'prop-types';

export const SearchStatus = (length) => {
    const count = String(length.length);
    let phrase;
    let colorBadge;
    if (count === '0') {
        colorBadge = 'badge bg-danger';
        phrase = 'Никто с тобой не тусанет сегодня';
    } else if (
        (count[count.length - 1] === '2' ||
            count[count.length - 1] === '3' ||
            count[count.length - 1] === '4') &&
        count[count.length - 2] !== '1'
    ) {
        colorBadge = 'badge bg-primary';
        phrase = count + ' человека тусанут с тобой сегодня';
    } else {
        colorBadge = 'badge bg-primary';
        phrase = count + ' человек тусанет с тобой сегодня';
    }
    return <span className={colorBadge}>{phrase}</span>;
};

SearchStatus.propTypes = {
    length: PropTypes.number
};
