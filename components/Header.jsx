import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
        <nav>
            <ul className='nav-links'>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/work'}>Work</Link></li>
                <li><Link to={'/skills'}>Skills</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
    </>
  )
}
