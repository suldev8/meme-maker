import React from 'react';


const Image = (props) => {
    const { src } = props;
    return (
        <img src={src} alt=""/>
    )
}

export default Image;
