import React from 'react';
import PropTypes from 'prop-types';
import { BookMark, QualitiesList, Table } from './';

export const UserTable = ({
    users,
    onSort,
    selectedSort,
    onToggleBookmark,
    onDelete
}) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: {
            name: 'Качества',
            component: (user) => (
                <QualitiesList
                    qualities={user.qualities}
                />
            )
        },
        professions: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => (
                <BookMark
                    onClick={() => onToggleBookmark(user._id)}
                    status={user.bookmark}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => onDelete(user._id)}
                >
                    Delete
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}/>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
