import React from 'react';



const Button = (props) => {
    const { label, onClick, className } = props;
    return (
        <button className={className} onClick={onClick}>{label}</button>
    )
}

export default Button;
