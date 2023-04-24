import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/'>Main</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href='/users'>Users</a>
            </li>
        </ul>
    );
};
