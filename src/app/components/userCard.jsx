import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../api';
import { Quality } from './';

export const UserCard = ({ currentId }) => {
    const [currentUser, setCurrentUser] = useState();
    const history = useHistory();
    const handleReturn = () => {
        history.push('/users');
    };
    useEffect(() => {
        api.users
            .getById(currentId)
            .then((data) =>
                setCurrentUser(data));
    }
    );
    if (currentUser) {
        return (
            <>

                <div className='d-flex flex-column p-3'>
                    <h2>{currentUser.name}</h2>
                    <h3>Профессия: {currentUser.profession.name}</h3>
                    <div className='d-flex'>
                        <Quality qualities={currentUser.qualities}/>
                    </div>
                    <h6>completedMeetings:{currentUser.completedMeetings}</h6>
                    <h2>Rate: {currentUser.rate}</h2>
                    <div className='d-flex'>
                        <button className='btn btn-secondary mt-2'
                            onClick={() => {
                                handleReturn();
                            }}
                        >
                    Все пользователи
                        </button>
                    </div>
                </div>

            </>
        );
    } return `Loading...`;
};

UserCard.propTypes = {
    currentId: PropTypes.string.isRequired
};
