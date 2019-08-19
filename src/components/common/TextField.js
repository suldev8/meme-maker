import React from 'react';

const TextField = (props) => {
    const { placeholder, name, value, onChange , className} = props;
    return (
       

            <input className={className} type="text" name={name} placeholder={placeholder} value={value} onChange={onChange} />
        
    )
}

export default TextField;
