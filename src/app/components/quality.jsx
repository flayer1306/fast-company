import React from 'react';
import PropTypes from 'prop-types';

const Quality = ({ qualities }) => {
    const newArray = [];
    for (let i = 0; i < qualities.length; i++) {
        const colorBadge = `badge m-1 bg-${qualities[i].color}`;
        newArray.push(
            <span key={qualities[i]._id} className={colorBadge}>
                {qualities[i].name}
            </span>
        );
    }
    return <>{newArray}</>;
};
Quality.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default Quality;
