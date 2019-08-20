import React from 'react';
import '../styles/Header.css';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Header = () => {
    return (

        <div>
            <nav>
            <img className="img-logo" src="https://a.imge.to/2019/08/20/Oysuj.png"/>
                <Link to="/AboutUs">About Us</Link>
            </nav>
        </div>
    )
}

export default Header;
