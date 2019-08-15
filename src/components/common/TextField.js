import React from 'react';

const TextField = (props) => {
    const { label, placeholder, name } = props;
    return (
        <label>
            {label} 
            <input type="text" name={name} placeholder={placeholder} />
        </label>
    )
}

export default TextField;
