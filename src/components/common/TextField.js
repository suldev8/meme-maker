import React from 'react';

const TextField = (props) => {
    const { label, placeholder, name, value, onChange } = props;
    return (
        <label>
            {label}
            <input type="text" name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </label>
    )
}

export default TextField;
