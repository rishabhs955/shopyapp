import React from 'react';
import amazon from '../affiliateAssets/amazon.png';
import flipkart from '../affiliateAssets/flipkart.png';
import Card from 'react-bootstrap/Card';
import './MainCard.css'
import { Button } from 'react-bootstrap';


function MainCard(props) {
  return (
    <Card>
      <a target={"_blank"} href={props.productImgUrl}><Card.Img variant="top" src={props.productImg} height={300} className="productImg" /></a>
      <hr className='cardOutline' />
      <Card.Body>
        <Card.Title className='cardTitle'>{[props.productTitle]}</Card.Title>
        <Card.Subtitle className='cardSubtitle'>Buy at best price:</Card.Subtitle>
        {/* <div className='siteButtons'>
            <img src={amazon}  />
            <img src={flipkart} />
        </div> */}
        <a href={props.productImgUrl}>
          <Button className='mainCardButton' variant='success'>Buy Now</Button>
        </a>
      </Card.Body>
    </Card>
  )
}

export default MainCard
