import React from 'react';
import "./styles/Image.css"

const Image = ({ src }) => (
    <img className="meme-img" src={src} alt="" />
);

export default Image;
