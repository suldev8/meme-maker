import React from 'react';
import "./Image.css"



const Image = (props) => {
    const { src } = props;
    return (
        <img className="meme-img" src={src} alt=""/>
    )
}

export default Image;
