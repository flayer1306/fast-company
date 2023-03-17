import React, { useState } from 'react';
import api from '../api'
import user from './user';
import phrase from './phrase';


const Users = () => {
    const [ users, setUsers ] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter(item => item._id !== userId))
    };

    return (
        <>
            <h1>{phrase(users.length)}</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                </tr>
                </thead>
                <tbody>
                {user(users, handleDelete)}
                </tbody>
            </table>
        </>
    )
};

export default Users;