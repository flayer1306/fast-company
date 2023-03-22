import React from 'react';

const SearchStatus = ({ users }) => {
    const strNumber = String(users.length);
    let phrase = '';
    let colorBadge = '';
    if (strNumber === '0') {
        colorBadge = 'badge bg-danger';
        phrase = 'Никто с тобой не тусанет сегодня';
    } else if ((strNumber[strNumber.length - 1] === '2' || strNumber[strNumber.length - 1] === '3' || strNumber[strNumber.length - 1] === '4')
        && strNumber[strNumber.length - 2] !== '1') {
        colorBadge = 'badge bg-primary';
        phrase = users.length + ' человека тусанут с тобой сегодня';
    } else {
        colorBadge = 'badge bg-primary';
        phrase = users.length + ' человек тусанет с тобой сегодня';
    }
    return <span className={colorBadge}>{phrase}</span>;
};

export default SearchStatus;