import React from 'react';



const Button = (props) => {
    const { label } = props;
    return (
        <Button className="btn">{label}</Button>
    )
}

export default Button;
