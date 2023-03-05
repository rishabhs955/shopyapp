import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import caro0 from '../assets/caro0.jpg';
import caro2 from '../assets/caro2.jpg';
import caro3 from '../assets/caro3.jpg';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000} className="caroItemSize">
            <img
            className="d-block w-100 caroItem"
            src={caro0}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Fashion</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} className="caroItemSize">
            <img
            className="d-block w-100 caroItem"
            src={caro2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Appliances</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caroItemSize">
            <img
            className="d-block w-100 caroItem"
            src={caro3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Groceries</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HeroSection
