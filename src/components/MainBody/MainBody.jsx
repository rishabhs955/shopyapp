import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import laptop from '../laptop.png';
import pococ31 from '../assets/pococ31.jpg';
import './MainBody.css';
import Carousel from 'react-bootstrap/Carousel';

//Fashion
import fas1 from '../fashionAssets/blackShirt.png';
import fas2 from '../fashionAssets/suit0.png';
import fas3 from '../fashionAssets/shoe0.jpg';
import fas4 from '../fashionAssets/saree0.webp';
import fas5 from '../fashionAssets/shoe1.png';
import fas6 from '../fashionAssets/hoodie.png';
import fas7 from '../fashionAssets/kurta.jpg';
import fas8 from '../fashionAssets/hoodie1.webp';

//Affiliate
import amazon from '../affiliateAssets/amazon.png';
import flipkart from '../affiliateAssets/flipkart.png';
import MainCard from '../MainCard/MainCard';

function MainBody() {

  return (
    <div>
      <h1 className='MainCardsHeading'>Fashion</h1>
      <Carousel>
      <Carousel.Item interval={100000}>
        <CardGroup>
            <MainCard 
              productImg={fas5} 
              productTitle={"Running / Walking / Sport Shoes For Men Running Shoes For Men  (White)"} 
            />  
            <MainCard 
              productImg={fas6} 
              productTitle={"Women Full Sleeve Solid Hooded Sweatshirt"} 
            /> 
            <MainCard 
              productImg={fas7} 
              productTitle={"Manyavar Elegant Embroidered Knee Long Full Sleeves Kurta and Churidar Set For Men"} 
            /> 
            <MainCard 
              productImg={fas8} 
              productTitle={"Men Full Sleeve Printed Hooded Sweatshirt"} 
            /> 
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item interval={100000}>
          <CardGroup>
            <MainCard 
              productImg={fas1} 
              productTitle={"Men Slim Fit Printed Spread Collar Casual Shirt"} 
            /> 
            <MainCard 
              productImg={fas2} 
              productTitle={"Women Kurta and Pant Set Viscose Rayon"} 
            />
            <MainCard 
              productImg={fas3} 
              productTitle={"Puma Unisex-Adult Bari Z Softfoam+ Sneakers"} 
            />
            <MainCard 
              productImg={fas4} 
              productTitle={"Self Design Bollywood Cotton Blend Saree  (Mustard)"} 
            />
          </CardGroup>
        </Carousel.Item>
        
      </Carousel>
      
    <h1 className='MainCardsHeading'>Electronics</h1>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <h1 className='MainCardsHeading'>Groceries</h1>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <h1 className='MainCardsHeading'>Mobiles</h1>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={laptop} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <h1 className='MainCardsHeading'>Kids Section</h1>
      <Carousel>
      <Carousel.Item interval={100000}>
        <CardGroup>
            <MainCard 
              productImg={fas5} 
              productTitle={"Running / Walking / Sport Shoes For Men Running Shoes For Men  (White)"} 
            />  
            <MainCard 
              productImg={fas6} 
              productTitle={"Women Full Sleeve Solid Hooded Sweatshirt"} 
            /> 
            <MainCard 
              productImg={fas7} 
              productTitle={"Manyavar Elegant Embroidered Knee Long Full Sleeves Kurta and Churidar Set For Men"} 
            /> 
            <MainCard 
              productImg={fas8} 
              productTitle={"Men Full Sleeve Printed Hooded Sweatshirt"} 
            /> 
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item interval={100000}>
          <CardGroup>
            <MainCard 
              productImg={fas1} 
              productTitle={"Men Slim Fit Printed Spread Collar Casual Shirt"} 
            /> 
            <MainCard 
              productImg={fas2} 
              productTitle={"Women Kurta and Pant Set Viscose Rayon"} 
            />
            <MainCard 
              productImg={fas3} 
              productTitle={"Puma Unisex-Adult Bari Z Softfoam+ Sneakers"} 
            />
            <MainCard 
              productImg={fas4} 
              productTitle={"Self Design Bollywood Cotton Blend Saree  (Mustard)"} 
            />
          </CardGroup>
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}

export default MainBody
