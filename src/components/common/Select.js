import React from 'react';

const Select = (props) => {

    const { onChange, fonts, label } = props;
    const fontsOptions = fonts.map((font, i) => <option key={i} value={font}>{font}</option>);
    return (
        <label>
            {label}
            <select onChange={onChange}>
                {fontsOptions}
            </select>
        </label>
    );
}
export default Select;