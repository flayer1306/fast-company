import React, { useState, useEffect } from 'react';
import SearchStatus from './searchStatus';
import Pagination from './pagination';
import paginate from '../utils/paginate';
import GroupList from './groupList';
import api from '../api';
import UserTable from './userTable';
import _ from 'lodash';

const Users = () => {
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' });

    const [users, setUsers] = useState();
    useEffect(() => {
        api.users
            .fetchAll()
            .then((data) =>
                setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers((users) =>
            users.filter((item) => item._id !== userId)
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

    useEffect(() => {
        api.professions
            .fetchAll()
            .then((data) =>
                setProfession(data)
            );
    }, []);
    useEffect(() => {
        return () => {
            setCurrentPage(1);
        };
    }, [selectedProf]);

    const handleProfessionSelect = item => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    if (users) {
        const filteredUsers = selectedProf
            ? users.filter(
                (user) =>
                    JSON.stringify(user.profession) ===
            JSON.stringify(selectedProf)
            )
            : users;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
            setCurrentPage(1);
        };
        const handleSort = (item) => {
            setSortBy(item);
        };

        return (
            <div className="d-flex">
                {professions && (
                    <div className='d-flex flex-column flex-shrink-0 p-3'>
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
                    </div>
                )
                }
                <div className="d-flex flex-column">
                    <h1>
                        <SearchStatus length={count}/>
                    </h1>
                    {count > 0 && (
                        <UserTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onToggleBookmark={handleToggleBookmark}
                            onDelete={handleDelete}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>

            </div>
        );
    }
    return 'Loading...';
};

export default Users;
