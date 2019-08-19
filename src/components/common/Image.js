import React from 'react';



const Image = (props) => {
    const { src , className } = props;
    return (
        <img className={className} src={src} alt=""/>
    )
}

export default Image;
