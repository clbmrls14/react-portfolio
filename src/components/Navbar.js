import React from 'react';

const Navbar = () => {
    return (
        <ul className="Navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/resume">My Resume</a></li>
            <li><a href="/skills">My Skills</a></li>
            <li><a href="/addproject/">Add Project</a></li>
        </ul>
    )
}

export default Navbar;