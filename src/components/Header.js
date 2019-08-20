import React from 'react';
import '../styles/Header.css';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
    return (

        <div>
            <nav>
                <Link to="/AboutUs">About Us</Link>
            </nav>
        </div>
    )
}

export default Header;
