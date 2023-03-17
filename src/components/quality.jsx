import React from 'react';

const renderBadgeQuality = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let colorBadge = `badge bg-${array[i].color}`;
        newArray.push(<span key={array[i]._id} className={colorBadge} style={{marginRight:0.5 + 'em'}}>{array[i].name}</span>)
    }
    return <td>{newArray}</td>
};

export default renderBadgeQuality;
