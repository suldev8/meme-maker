import React from 'react';
import './styles/TextField.css';

const TextField = ({ placeholder, name, value, onChange }) => (
    <input className="text-field" type="text" name={name} placeholder={placeholder} value={value} onChange={onChange} />
);

export default TextField;
