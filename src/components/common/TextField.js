import React from 'react';
import './TextField.css';

const TextField = (props) => {
    const { placeholder, name, value, onChange } = props;
    return (
        <input className="text-field" type="text" name={name} placeholder={placeholder} value={value} onChange={onChange} />
    )
}

export default TextField;
