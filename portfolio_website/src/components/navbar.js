import React from 'react';

function Navbar(){
    return(
        <nav className = "nav">
            <a href = "/" className = "siteTitle">Liam Mazure</a>

            <ul classname = "active">
                <li>
                    <a href = "/projects">Projects</a>
                </li>
                <li>
                    <a href = "/about">About Liam</a>
                </li>
                <li>
                    <a href = "/resume">Resume</a>
                </li>
                <li>
                    <a href = "/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;