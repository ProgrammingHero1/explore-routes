import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>products</Link>
        </div>
    );
};

export default Header;