import React from 'react';
import renderBadgeQuality from './quality';

const user = (array, callback) => {
        if(array){
            return array.map((user) => (
                <tr key={user._id}>
                    <td>{user.name}</td>
                    {renderBadgeQuality(user.qualities)}
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td><button className='btn btn-primary btn-sm m-2'
                                onClick={() => callback(user._id)}
                    >Delete</button></td>
                </tr>
            ))
        }
        console.error('error')
    };

export default user;
