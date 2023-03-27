import React from 'react';
import Quality from './quality';
import BookMark from './bookmark';
import PropTypes from 'prop-types';

const User = (props) => {
    // console.log(props)
    return (
        <tr key={props._id}>
            <td>{props.name}</td>
            <Quality qualities={props.qualities}/>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td>
                <BookMark
                    onToggleBookmark={props.onToggleBookmark}
                    status={props.bookmark}
                    id={props._id}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => props.onDelete(props._id)}
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
