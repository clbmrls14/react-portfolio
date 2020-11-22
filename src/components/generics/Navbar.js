import React from 'react';
import AuthenticationButton from './AuthenticationButton';

const Navbar = () => {
    return (
        <ul className="Navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/resume">My Resume</a></li>
            <li><a href="/skills">My Skills</a></li>
            <li><a href="/addproject/">Add Project</a></li>
            <li><AuthenticationButton /></li>
        </ul>
    )
}

export default Navbar;