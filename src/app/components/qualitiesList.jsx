import React from 'react';
import { Quality } from './';
import PropTypes from 'prop-types';

export const QualitiesList = ({ qualities }) => {
    return (
        <Quality qualities={qualities}/>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};
