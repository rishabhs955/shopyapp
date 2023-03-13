import React from 'react'
import NavBar from '../Navbar/NavBar'
import Carousel from 'react-bootstrap/Carousel';
import caro0 from '../assets/caro0.jpg';
import caro2 from '../assets/caro2.jpg';
import caro3 from '../assets/caro3.jpg';
import "./Fashion.css";
import men0 from './FashionBulkAssets/men0.jpeg'
import women0 from './FashionBulkAssets/women0.jpeg'
import kids0 from './FashionBulkAssets/kids0.jpg'
import FashionProducts from './FashionProducts';
import Footer from '../Footer/Footer';



function Fashion() {
  return (
    <div>
      <NavBar />
      <Carousel controls={true} indicators={false}>
        <Carousel.Item interval={20000000} className="fashionCaroItemSize">
            <img
            className="d-block w-100 fashionCaroItem"
            src={men0}
            alt="First slide"
            width={900} height={400}
            />
            <Carousel.Caption>
            <h3>Men's Fashion</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000000} className="fashionCaroItemSize">
            <img
            className="d-block w-100 fashionCaroItem"
            src={women0}
            alt="Second slide"
            width={900} height={400}
            />
            <Carousel.Caption>
            <h3>Women's Fashion</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000000} className="fashionCaroItemSize">
            <img
            className="d-block w-100 fashionCaroItem"
            src={kids0}
            alt="Third slide"
            width={900} height={400}
            />
            <Carousel.Caption>
            <h3>Kids Fashion</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <FashionProducts />
    <Footer />
    </div>
  )
}

export default Fashion
