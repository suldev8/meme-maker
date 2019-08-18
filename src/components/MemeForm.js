import React, { Component } from 'react';
// import Image from './common/Image';
// import Button from './common/Button';
import TextField from './common/TextField';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../styles/formstyle.css';








export class MemeForm extends Component {
    render() {
        return (
            <div className="meme-form-div">
               <Image src="https://sanitationsolutions.net/wp-content/uploads/2015/05/empty-image-300x200.png" className="memeimg" />
            
                <TextField label="Top text" name="top-text"/>
                <TextField label="Bottom text" name="bottom-text" />

                <Button label="Random Meme" variant="primary">Random MEME</Button>
                <Button label="Upload Image" variant="primary">Upload Image</Button>
               
            </div>
        )
    }
}

export default MemeForm;

