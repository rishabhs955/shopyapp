import React from "react";
import amazon from "../affiliateAssets/amazon.png";
import flipkart from "../affiliateAssets/flipkart.png";
import Card from "react-bootstrap/Card";
import "./MainCard.css";
import { Button } from "react-bootstrap";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function MainCard(props) {
  return (
    <Card>
      <a target={"_blank"} rel="noreferrer" href={props.productImgUrl}>
        <Card.Img
          variant="top"
          src={props.productImg}
          height={300}
          className="productImg"
        />
      </a>
      <hr className="cardOutline" />
      <Card.Body>
        <div class="mainCardRibbonWrap">
          <span class="ribbon6">Best Deal</span>
        </div>
        <Card.Subtitle className="cardTitle">
          {[props.productTitle.substring(0, 65)]} ...
        </Card.Subtitle>
        <p className="cardSubtitle">Buy at best price:</p>
        {/* <div className='siteButtons'>
            <img src={amazon}  />
            <img src={flipkart} />
        </div> */}
        <div className="d-flex justify-content-around">
          <MDBBtn style={{ backgroundColor: '#FB641B' }}  className='mx-2' href="#">
            Flipkart
          </MDBBtn>
          <a target={"_blank"} rel="noreferrer" href={props.productImgUrl}>
          <MDBBtn color="dark" className='mx-2'>
            <MDBIcon color="warning" className="me-2" fab icon="amazon" /> Amazon
          </MDBBtn>
          </a>
        </div>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">At best price - ShapInd</small>
      </Card.Footer>
    </Card>
  );
}

export default MainCard;
