import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import caro0 from '../assets/caro0.jpg';
import caro2 from '../assets/caro2.png';
import caro3 from '../assets/caro3.jpg';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
      <Carousel style={{ marginTop: '60px' }}>
        <Carousel.Item interval={1000} className="caroItemSize">
            <img
            className="d-block w-100 caroItem"
            src={caro0}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Fashion</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} className="caroItemSize">
            <img
            className="d-block w-100 caroItem"
            src={caro2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Follow us</h3>
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
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HeroSection
