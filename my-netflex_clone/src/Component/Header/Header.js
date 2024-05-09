import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixLogo from '../../Asset/images/NetflixLogo.png';

function Header() {
    const [show, handleShow] = useState(false);
    const [isListOpen, setIsListOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleList = () => {
        setIsListOpen(!isListOpen);
    };

    return (
        <div className={`header_outer_container ${show && 'header__black'}`}>
            <div className='header_container'>
                <div className="header_left">
                    <ul className={isListOpen ? 'open' : ''}>
                        <li onClick={toggleList}><img className='netflix-img' src={NetflixLogo} alt="NetflixLogo" style={{ width: '100px' }} /></li>
                        <li><Link to="/home" onClick={toggleList}>Home</Link></li>
                        <li><Link to="/tv-shows" onClick={toggleList}>TV Shows</Link></li>
                        <li><Link to="/movies" onClick={toggleList}>Movies</Link></li>
                        <li><Link to="/latest" onClick={toggleList}>Latest</Link></li>
                        <li><Link to="/my-list" onClick={toggleList}>My List</Link></li>
                        <li><Link to="/browse-languages" onClick={toggleList}>Browse by Languages</Link></li>
                    </ul>
                </div>
                <div className="header_right">
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
