import React from 'react';
import '../styles/navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav>
            <a
                href='#Home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
                Homepage
            </a>
            <a
                href='#Projects'
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
                Projects
            </a>
            <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact Me
            </a>
            <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
        </nav>
    )
}

export default Navbar;