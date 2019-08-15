import React, { Component } from 'react';
import Image from './common/Image';
import Button from './common/Button';
import TextField from './common/TextField';

export class MemeForm extends Component {
    render() {
        return (
            <div>
                <Image />
                <TextField label="Top text" name="top-text" />
                <TextField label="Bottom text" name="bottom-text" />
                <Button label="Random Meme" />
                <Button label="Upload Image"/>
                <Button label="Generate" />
            </div>
        )
    }
}

export default MemeForm;

