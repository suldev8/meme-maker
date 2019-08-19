import React from 'react';
import './Button.css';



const Button = (props) => {
    const { label, onClick } = props;
    return (
        <button className="main-btn" onClick={onClick}>{label}</button>
    )
}

export default Button;
