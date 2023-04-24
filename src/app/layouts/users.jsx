import React from 'react';
import { useParams } from 'react-router-dom';
import { UserPage, UsersList } from '../components';

export const Users = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            {userId ? <UserPage currentId={ userId }/> : <UsersList/>}
        </>
    );
};
