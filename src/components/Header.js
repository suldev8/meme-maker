import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";


const Header = () => (
    <div>
        <nav className="header-nav">
            <Link to="/">
                <img className="img-logo" src="https://a.imge.to/2019/08/20/Oysuj.png" />
            </Link>{" "}
            <Link to="/Gallery" className="about-us-header">Gallery</Link>{" "}
            <Link to="/AboutUs" className="about-us-header">About Us</Link>
        </nav>
    </div>
);

export default Header;
