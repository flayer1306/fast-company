import React, { useState } from 'react';
import api from './app/api';
import Users from './app/components/users';

const App = () => {
    const [ users, setUsers ] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter(item => item._id !== userId))
    };

    return (
        <div>
            <Users
                users={users}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default App;