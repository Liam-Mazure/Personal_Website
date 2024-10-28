import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth',
        });
    }

    return(
        <nav className = "nav">
            <Link to = "/" className = "siteTitle">Liam Mazure</Link>

            <ul className = "nav_links">
                <li>
                    <div className='dropDown'>
                        <Link id = "project_link" className = "nav_link" to = "/projects">Projects</Link>
                        <div className='dropDown_menu'>
                            <Link to = "/projects" className='dropDown_link' onClick={(e) => handleSmoothScroll(e, '.sec-1')}>Augmented Reality(AR)</Link>
                            <Link to = "/projects" className='dropDown_link' onClick={(e) => handleSmoothScroll(e, '.sec-2')}>Website Development</Link>
                            <Link to = "/projects" className='dropDown_link' onClick={(e) => handleSmoothScroll(e, '.sec-3')}>Video Games</Link>
                            <Link to = "/projects" className='dropDown_link' onClick={(e) => handleSmoothScroll(e, '.sec-4')}>Mobile Applications</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to = "/about"className='nav_link'>About Liam</Link>
                </li>
                <li>
                    <Link to = "/resume" className='nav_link'>Resume</Link>
                </li>
                <li>
                    <Link to = "/contact" className='nav_link'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;