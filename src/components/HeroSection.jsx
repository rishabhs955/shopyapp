import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import caro0 from './caro0.png';
import caro2 from './caro2.png';
import caro3 from './caro3.png';
import './HeroSection.css'

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
            <h3>First slide label</h3>
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
            <h3>Second slide label</h3>
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
            <h3>Third slide label</h3>
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
