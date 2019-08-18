import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const TextField = (props) => {
    const { label, placeholder, name } = props;
    return (
        <label>
            {label} 
            {/* <input type="text" name={name} placeholder={placeholder} /> */}

            <Form.Control type="text" placeholder="Add text"/>
            

        </label>
    )
}

export default TextField;
