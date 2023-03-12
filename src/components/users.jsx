import React, { useState } from 'react';
import api from '../api'


const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    console.log(users)
    const renderBadgeQualities = () => {
            users.map((qualities) => {
                return qualities.qualities.map((names) => {
                    console.log(names)
                }
                    //  (
                    //     <span className='badge bg-primary'>{names.name}</span>
                    // )
                );
            })
    }

    const renderUsers = () => {
        // renderBadgeQualities()
        return users.map((user) => (
            <tr key={user._id}>
                <td scope="row" >{user.name}</td>
                <td className='badge bg-primary'>{renderBadgeQualities()}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
            </tr>
        ))
    }
    return (
        <>
        <h1>Users</h1>
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
                    {renderUsers()}
                </tbody>
            </table>
        </>
    )
}

export default Users;