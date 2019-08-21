import React from 'react';
import "./Select.css"

const Select = (props) => {

    const { onChange, options, label, name, value} = props;
    const allOptions = options.map((font, i) => <option key={i} value={font}>{font}</option>);
    return (
        <label>
            {label}
            <br/>
            <select className="select-list" onChange={onChange} name={name} value={value}>
                {allOptions}
            </select>
        </label>
    );
}
export default Select;