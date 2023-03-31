import React, { useState, useEffect } from 'react';
import SearchStatus from './searchStatus';
import User from './user';
import Pagination from './pagination';
import paginate from '../utils/paginate';
import GroupList from './groupList';
import PropTypes from 'prop-types';
import api from '../api';

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    useEffect(() => {
        api.professions
            .fetchAll()
            .then((data) =>
                setProfession(data)
            );
    }, []);

    const handleProfessionSelect = item => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filteredUsers = selectedProf
        ? users.filter((user) =>
            user.profession === selectedProf)
        : users;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
        setCurrentPage(1);
    };
    return (
        <>
            <h1>
                <SearchStatus users={users}/>
            </h1>
            {professions && (
                <>
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                        valueProperty='_id'
                        contentProperty='name'
                    />
                    <button className='btn btn-secondary mt-2'
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </>

            )
            }
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...user} {...rest} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
