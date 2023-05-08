import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './img1.jpg'
import img2 from './img2.jpg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import img7 from './img7.jpg';
import img8 from './img8.jpeg';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={img1} alt='img1' />
                </div>
                <div>
                    <img src={img2} alt='img2' />
                </div>
                <div>
                    <img src={img3} alt='img3' />
                </div>
                <div>
                    <img src={img4} alt='img4' />
                </div>
                <div>
                    <img src={img5} alt='img5' />
                </div>
                <div>
                    <img src={img6} alt='img6' />
                </div>
                <div>
                    <img src={img7} alt='img7' />
                </div>
                <div>
                    <img src={img8} alt='img8' />
                </div>
            </Carousel>
        </div>
    );
}