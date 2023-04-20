import React from 'react';
import { Quality, BookMark } from './';
import PropTypes from 'prop-types';

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onToggleBookmark,
    onDelete,
    bookmark
}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <Quality qualities={qualities}/>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <BookMark
                    onClick={() => onToggleBookmark(_id)}
                    status={bookmark}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => onDelete(_id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
