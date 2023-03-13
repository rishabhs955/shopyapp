import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
       <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a> */}
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a> */}
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a> */}
          <a target={"_blank"} rel="noreferrer" href='https://www.instagram.com/shapind_/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a target={"_blank"} rel="noreferrer" href='https://www.youtube.com/@shapind' className='me-4 text-reset'>
            <MDBIcon fab icon="youtube" />
          </a>
          <a target={"_blank"} rel="noreferrer" href='https://t.me/shapind' className='me-4 text-reset'>
            <MDBIcon fab icon="telegram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Shapind.com
              </h6>
              <p>
              Welcome to our ShapIND website! We are dedicated to helping you make informed decisions by providing comprehensive and unbiased comparisons of various products and services.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Electronics
                </a>
              </p>
              <p>
              <Link to="/fashion" className='text-reset'>
              Fashion
                </Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Household
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  More..
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            {/* <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 
                + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 
                + 01 234 567 89
              </p>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright : <a className='text-reset fw-bold text-decoration-none'  href='https://www.shapind.com/'>
           Shapind.com
        </a>
      </div>
    </MDBFooter>
    <img src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=shapind-21&language=en_IN&marketplace=amazon&region=IN&placement=B09PGK3WD8&asins=B09PGK3WD8&linkId=8734d673e0a43ef20ecad63795e93afd&show_border=true&link_opens_in_new_window=true" style={{width:'100%'}} alt="" />
    </div>
  )
}

export default Footer
