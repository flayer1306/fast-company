import React from 'react';
// import User from './user';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import BookMark from './bookmark';

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onToggleBookmark,
    onDelete,
    ...rest
}) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: { name: 'Качества' },
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
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
            {/* <tbody> */}
            {/*    {users.map((user) => ( */}
            {/*        <User key={user._id} {...user} {...rest} /> */}
            {/*    ))} */}
            {/* </tbody> */}
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UserTable;
