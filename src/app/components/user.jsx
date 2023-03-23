import React from 'react';
import Quality from './quality';
import BookMark from './bookmark';

const User = (props) => {
    // console.log(props)
    return (
        <tr key={props._id}>
            <td>{props.name}</td>
            <Quality
                qualities={props.qualities}
            />
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
                <button className='btn btn-danger btn-sm m-2'
                        onClick={() => props.onDelete(props._id)}
                >Delete
                </button>
            </td>
        </tr>
    )
};

export default User;
