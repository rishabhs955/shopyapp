import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { useEffect, useState  } from 'react';

function TestSlider() {

  const [products, setProducts] = useState([]);


     useEffect(() => {
      const baseUrl = "http://localhost:4000";
      const affUrl =  "/getbykeyword/fashion+jeans";
      axios.get(baseUrl+affUrl)
      .then((response) => {
        setProducts(response.data.products);
      });
      console.log(products);
    }, []);

    

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

  return (
    <div>
    </div>
  )
}

export default TestSlider
