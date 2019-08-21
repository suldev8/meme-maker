import React from 'react';
import "./styles/Select.css"

const Select = ({ onChange, options, label, name, value }) => (
    <label>
        {label}
        <br />
        <select className="select-list" onChange={onChange} name={name} value={value}>
            {options.map((font, i) => <option key={i} value={font}>{font}</option>)}
        </select>
    </label>
);

export default Select;