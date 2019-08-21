import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Gallery.css';


export class Gallery extends Component {
    render() {
        return (

            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="gallery-img"
                            src="Hazm-mememaker.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="gallery-img"
                            src="Ahlam-mememaker.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="gallery-img"
                            src="https://static.boredpanda.com/blog/wp-content/uploads/2019/03/2-5c99d48ecb850__700.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="gallery-img"
                            src="Batman-mememaker.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="gallery-img"
                            src="http://www.quickmeme.com/img/22/22bf2a4cc72be07dea0fe768bf0341601a6da2073ef06699263614875815d6ee.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="gallery-img"
                            src="http://www.quickmeme.com/img/10/102d2134f05efa79ab95e140995c18c8ba4796d6c41a9a323da1d9bb4ccd5b6b.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}

export default Gallery;

