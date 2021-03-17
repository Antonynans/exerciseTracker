import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <Link to='/' className="navbar-brand">ExerciseTracker</Link>
            <div className="navbar-collapse">
                <ul className="navbar-nav ml-md-auto">
                    <li className="navbar-item">
                        <Link to ="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to ="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to ="/new-user" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
