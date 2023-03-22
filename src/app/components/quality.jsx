import React from 'react';

const Quality = ({ qualities }) => {
    let newArray = [];
    for (let i = 0; i < qualities.length; i++) {
        let colorBadge = `badge m-1 bg-${qualities[i].color}`;
        newArray.push(<span key={qualities[i]._id} className={colorBadge}>{qualities[i].name}</span>);
    }
    return <td>{newArray}</td>
};

export default Quality;
