import React from 'react';
import './styles/Button.css';



const Button = ({ label, onClick }) => (
    <button className="main-btn" onClick={onClick}>{label}</button>
);


export default Button;
