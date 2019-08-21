import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";


const Header = () => (
    <div>
        <nav>
            <img className="img-logo" src="https://a.imge.to/2019/08/20/Oysuj.png" />
            <Link to="/AboutUs">About Us</Link>
        </nav>
    </div>
);

export default Header;
