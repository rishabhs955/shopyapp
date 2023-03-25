import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MainCard from '../MainCard/MainCard';
import './FashionProduct.css'

function FashionProducts() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  https://www.amazon.in/Mivi-Earphones-Powerful-Tangle-Length/dp/B093LMBJB6?pd_rd_w=e9cYN&content-id=amzn1.sym.7938e11a-362b-421f-bd30-8dd8d3c4b65f&pf_rd_p=7938e11a-362b-421f-bd30-8dd8d3c4b65f&pf_rd_r=RCRR0PDQMC72WDJT899B&pd_rd_wg=S8FfP&pd_rd_r=60b96b44-fb22-4002-8a79-96c7c351898e&pd_rd_i=B093LMBJB6&th=1&linkCode=sl1&tag=shapind-21&linkId=41d7beb8cf440af22b0c375dd42ff5d1&language=en_IN&ref_=as_li_ss_tl
  return (
    <div>
      <h3 className='fashionProductHeading0'>Under 100</h3>
      <Carousel responsive={responsive}
        infinite={true}  >
        <MainCard productImg={"https://m.media-amazon.com/images/I/71a7kkn7LvL._UX679_.jpg"}
        productImgUrl={"https://www.amazon.in/TADMOS-Solid-Women-T-Shirt-X-Large/dp/B09PGK3WD8?crid=DWZL23E5F4LR&keywords=shirt%2Bunder%2B100&qid=1678705516&sprefix=shirt%2Bunder%2B100%2Caps%2C256&sr=8-28&th=1&psc=1&linkCode=li2&tag=shapind-21&linkId=1f44bbaa51d2b3c5330faf414ab235d2&language=en_IN&ref_=as_li_ss_il"}
        productTitle={'TADMOS Solid Women Round Neck Black T-Shirt'}>
        </MainCard>
        
      </Carousel>
    </div>
  )
}

export default FashionProducts
