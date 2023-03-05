import React from 'react';
import amazon from '../affiliateAssets/amazon.png';
import flipkart from '../affiliateAssets/flipkart.png';
import Card from 'react-bootstrap/Card';
import './MainCard.css'

function MainCard(props) {
  return (
    <Card>
        <Card.Img variant="top" src={props.productImg} height={300} className="productImg" />
        <hr className='cardOutline'/>
        <Card.Body>
        <Card.Title>{[props.productTitle]}</Card.Title>
        <Card.Subtitle className='cardSubtitle'>Buy at best price:</Card.Subtitle>
        <div className='siteButtons'>
            <img src={amazon}  />
            <img src={flipkart} />
        </div>
        </Card.Body>
    </Card>
  )
}

export default MainCard
