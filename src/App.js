import React, { useState } from 'react';
import api from './app/api';
import Users from './app/components/users';

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((item) => item._id !== userId)
        );
    };
    const handleToggleBookmark = (userId) => {
        setUsers((prevState) =>
            prevState.map((user) => {
                let newObj;
                if (user._id === userId) {
                    newObj = {
                        ...user,
                        bookmark: !user.bookmark
                    };
                } else {
                    newObj = { ...user };
                }
                return newObj;
            })
        );
    };

    return (
        <div>
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookmark={handleToggleBookmark}
            />
        </div>
    );
};

export default App;
