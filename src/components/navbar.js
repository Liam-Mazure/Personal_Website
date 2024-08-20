import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className = "nav">
            <Link to = "/" className = "siteTitle">Liam Mazure</Link>

            <ul classname = "active">
                <li>
                    <Link to = "/projects">Projects</Link>
                </li>
                <li>
                    <Link to = "/about">About Liam</Link>
                </li>
                <li>
                    <Link to = "/resume">Resume</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;