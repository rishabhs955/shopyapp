import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import laptop from '../laptop.png';
import pococ31 from '../assets/pococ31.jpg';
import './MainBody.css';
// import Carousel from 'react-bootstrap/Carousel';

//Fashion
import fas1 from '../fashionAssets/blackShirt.png';
import fas2 from '../fashionAssets/suit0.png';
import fas3 from '../fashionAssets/shoe0.jpg';
import fas4 from '../fashionAssets/saree0.webp';
import fas5 from '../fashionAssets/shoe1.png';
import fas6 from '../fashionAssets/hoodie.png';
import fas7 from '../fashionAssets/kurta.jpg';
import fas8 from '../fashionAssets/hoodie1.webp';

//Electronics
import elec0 from '../electronicsAssets/elec0.webp';
import elec1 from '../electronicsAssets/elec1.webp';
import elec2 from '../electronicsAssets/elec2.webp';
import elec3 from '../electronicsAssets/elec3.webp';


//Groceries
import groc0 from '../groceriesAssets/groc0.webp';
import groc1 from '../groceriesAssets/groc1.webp';
import groc2 from '../groceriesAssets/groc2.jpg';
import groc3 from '../groceriesAssets/groc3.jpg';

//Mobiles
import mob0 from '../mobilesAssets/mob0.webp';
import mob1 from '../mobilesAssets/mob1.webp';
import mob2 from '../mobilesAssets/mob2.webp';
import mob3 from '../mobilesAssets/mob3.webp';
import mob4 from '../mobilesAssets/mob4.webp';
import mob5 from '../mobilesAssets/mob5.webp';
import mob6 from '../mobilesAssets/mob6.webp';
import mob7 from '../mobilesAssets/mob7.webp';


//Grooming
import groom0 from '../GroomingAssets/groom0.webp';
import groom1 from '../GroomingAssets/groom1.webp';
import groom2 from '../GroomingAssets/groom2.webp';
import groom3 from '../GroomingAssets/groom3.webp';


//Kids
import kid0 from '../kidsAssets/kid0.webp';
import kid1 from '../kidsAssets/kid1.webp';
import kid2 from '../kidsAssets/kid2.webp';
import kid3 from '../kidsAssets/kid3.jpg';
import kid4 from '../kidsAssets/kid4.webp';
import kid5 from '../kidsAssets/kid5.webp';
import kid6 from '../kidsAssets/kid6.webp';
import kid7 from '../kidsAssets/kid7.webp';


//Affiliate
import amazon from '../affiliateAssets/amazon.png';
import flipkart from '../affiliateAssets/flipkart.png';
import MainCard from '../MainCard/MainCard';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function MainBody() {

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
      <h1 className='MainCardsHeading'>Fashion</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
      >
        <CardGroup>
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71V0TFm3MsL._UX679_.jpg"}
          productImgUrl={"https://amzn.to/3LjO8qV"}
          productTitle={"FUNDAY FASHION Full Sleeve Blue Solid Women's Denim Jacket"}
        />
        </CardGroup>
        <CardGroup>
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61EtKnMmD+S._UX679_.jpg"}
          productImgUrl={"https://amzn.to/3FjL6iI"}
          productTitle={"Goodtry G Women's Cotton Hoodies-Black"}
        />
        </CardGroup>
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61VCf0F1EuL._UX569_.jpg"}
          productImgUrl={"https://amzn.to/3FfIPVO"}
          productTitle={"Excent Men's Cotton Rich Traditional and Ethnic Wear Straight Kurta Pajama Set"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61+zumLgofL._UY741_.jpg"}
          productImgUrl={"https://amzn.to/3ZK9vG8"}
          productTitle={"Jump Cuts Mens Printed Hooded Neck Full Sleeve Black Cotton Slim Fit T-Shirt"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/81f+W65U3WL._UX569_.jpg"}
          productImgUrl={"https://amzn.to/3FjQEtg"}
          productTitle={"Amazon Brand - Myx Women Kurti"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/51zS7pyQR5L._UX679_.jpg"}
          productImgUrl={"https://amzn.to/3ZZL3Ar"}
          productTitle={"OTUS Men's Cotton Casual/Formal Slim Fit Solid Shirt"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/518VL9K6JTL._UX679_.jpg"}
          productImgUrl={"https://amzn.to/3l7H6Lc"}
          productTitle={"Meesan Women's Straight Short Kurti, Casual Wear Tunic (MFTN_169)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71m+EGqdJ0L._UY695_.jpg"}
          productImgUrl={"https://amzn.to/403FP6J"}
          productTitle={"US Polo Association Mens Abor Sneakers"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/91eobYTxD+L._UY741_.jpg"}
          productImgUrl={"https://amzn.to/3FmdiS6"}
          productTitle={"Soru Fashion Women's Kanjivaram Silk Saree With Blouse Piece"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61pMT5p4jlL._UY695_.jpg"}
          productImgUrl={"https://amzn.to/3mNaqqV"}
          productTitle={"Men's Black Casual Sneaker"}
        />
      </Carousel>

      <h1 className='MainCardsHeading'>Electronics</h1>
      <Carousel responsive={responsive}
        infinite={true}  >
        <MainCard productImg={"https://m.media-amazon.com/images/I/41tDRLWBPlL._SY300_SX300_.jpg"}
          productImgUrl={"https://amzn.to/400sNab"}
          productTitle={'Mivi Rock and Roll E5 Wired In Ear Earphones with HD Sound and Extra Powerful Bass with Mic, Tangle Free & Extra Length Cable | Earphones for Mobile | Black'}>
        </MainCard>
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/617P9ij1poL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3yBh9XI"}
          productTitle={"ASUS TUF Gaming F15 Intel Core i5 10th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) FX506LHB-HN358W Gaming Laptop (15.6 inch [40cm], Black Plastic, 2.30 kg)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/617ysOitciL._SX522_.jpg"}
          productTitle={"boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Charcoal Black)"}
          productImgUrl={"https://amzn.to/3yzs1VV"}
          productDesc={"Raise the thrill in every game and add a little style to your gaming setup with the Asus TUF Gaming F15 laptop. It is equipped with a 10th Gen Intel Core H-Series processor and GeForce GTX 1650 GPU so that you can experience fast-paced and smooth gaming. And, with the desktop-style Keyboard setup and integrated backlights, you can indulge in gaming for hours without getting bored."}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/421LjRn"}
          productTitle={"Echo Dot (3rd Gen) - Alexa smart speaker with loud 360 degree sound & Bluetooth"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71d5fMDvq9L._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3JxXXQG"}
          productTitle={"OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/81NRXI322NL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3Fj9G3k"}
          productTitle={"Cosmic Byte Kotion GS410 Wired On Ear Headphone with Mic for Mobiles, Tablets, PC, PS4, PS5 and Xbox (Blue)"}
        />
      </Carousel>



      <h1 className='MainCardsHeading'>Groceries</h1>
      <Carousel responsive={responsive}
        infinite={true}  >
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71lmddoIdNL._SY741_.jpg"}
          productImgUrl={"https://amzn.to/404OKFa"}
          productTitle={"Nuts About You RAISIN, 500 g | 100% Natural | Premium| Kishmish | Saugi"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/51+KKothPzL.jpg"}
          productImgUrl={"https://amzn.to/3JfYy8s"}
          productTitle={"Fortune Oil, 1 L Pouch Premium Kachi Ghani Pure Mustard"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/814iBcUf1aL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3yAVL4Q"}
          productTitle={"UNIBIC Cookies, Assorted Cookies, 75 g (Pack of 10) | Biscuits Combo Pack | Choco Chip Cookies | Butter Cookies | Fruit & Nut Cookies | Cashew Cookies"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/91MvTUMVm1L._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3YNIFM2"}
          productTitle={"Vedaka Popular Whole California Almonds, 200g"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/51bP5mNwo3L._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3mHNGIF"}
          productTitle={"Bajaj 100% Pure Coconut Oil 600 ml"}
        /><MainCard
          productImg={"https://m.media-amazon.com/images/I/510O7shLZyL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/4089zzz"}
          productTitle={"Nutella Hazelnut Spread with Cocoa (Labels may vary), 350g"}
        /><MainCard
          productImg={"https://m.media-amazon.com/images/I/61R08q3S9zL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3JDyeXj"}
          productTitle={"Tata Sampann 100% Pure Premium Raisins Seedless, 200g"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71AfKPJFjoL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3ZHGavX"}
          productTitle={"Surf Excel Matic Liquid Detergent Front Load Pouch 2l"}
        /> 
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61g+215lKDL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg"}
          productImgUrl={"https://amzn.to/42cGV26"}
          productTitle={"Harpic Disinfectant Toilet Cleaner Liquid, Original - 1 Litre (Pack of 2) | Thick Toilet Cleaning Acid Suitable for Toilet Bowls"}
        />

      </Carousel>
      <h1 className='MainCardsHeading'>Mobiles</h1>
      <Carousel responsive={responsive}
        infinite={true}  >
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71V--WZVUIL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3LgWOhR"}
          productTitle={"OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/41IcuNkyrdL._SY600_SX600_.jpg"}
          productImgUrl={"https://amzn.to/3Jb2BTj"}
          productTitle={"Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/41VcqwZ-O8L._SY600_SX600_.jpg"}
          productImgUrl={"https://amzn.to/3Jd8boq"}
          productTitle={"Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3Jd8DD8"}
          productTitle={"OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71AWvZMY6LL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3JCRMuA"}
          productTitle={"Tecno Spark 8T (Atlantic Blue, 4GB RAM,64GB Storage)| 50MP AI Camera | 7GB Expandable RAM"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/81zLNgcvlaL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3yxFPAn"}
          productTitle={"Redmi Note 11 (Horizon Blue, 6GB RAM, 128GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included"}
        />

      </Carousel>

      <h1 className='MainCardsHeading'>Grooming</h1>
      <Carousel responsive={responsive}
        infinite={true}  >
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61n4jyp69IL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3yB7nVo"}
          productTitle={"Philips BT1232/15 Skin-Friendly Beard Trimmer - DuraPower Technology, Cordless Rechargeable with USB Charging, Charging Indicator, Travel Lock, No Oil Needed"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/81PJUqIc-fL._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3mMn8Gp"}
          productTitle={"Bombay Shaving Company Post-Shave Balm- After Shaving Lotion with Witch Hazel, Alcohol Free - 100 g | Made in India"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61yM7doKPWS._SX679_.jpg"}
          productImgUrl={"https://amzn.to/3YMaKDz"}
          productTitle={"Kubra KB-1088 Hair and Beard Trimmer with USB Charging, 40 Length Setting, 45 minutes Cordless use, 1 Year Warranty (Black)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61hOVmQZczL._SX522_PIbundle-4,TopRight,0,0_SX522SY475SH20_.jpg"}
          productImgUrl={"https://amzn.to/3ZKSpbp"}
          productTitle={"The Man Company Body Spray Combo Pack For Men, Active, Legend, Intense & Bold, Long-Lasting Fragrance, Everyday Use Deo, 150ml (Pack Of 4)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71hvuVj6GML._SY879_.jpg"}
          productImgUrl={"https://amzn.to/3yAfZLS"}
          productTitle={"Urbangabru Hair Removal cream Spray | Painless Body Hair Removal spray For Chest, Back, Legs & Under Arms (200 ml)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/51GiGaQe8aL._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3YLs0Zs"}
          productTitle={"Garnier Men, Face Wash, Brightening & Anti-Pollution, TurboBright Double Action, 100 g"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61efFnT7A5L._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3Tb1EPo"}
          productTitle={"Set Wet Styling Hair Gel for Men - Casually Cool, 250gm | Medium Hold, High Shine | For Medium to Long Hair |No Alcohol, No Sulphate"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71ZaQtv8psL._SY879_.jpg"}
          productImgUrl={"https://amzn.to/3TanmmS"}
          productTitle={"Beardo Beard & Hair Growth Oil for thicker, longer beard | For patchy, uneven beard | Beard Oil for fast beard growth | Natural Hair Oil 50ml"}
        />
        
      </Carousel>

      <h1 className='MainCardsHeading'>Kids Section</h1>
      <Carousel responsive={responsive}
        infinite={true}  >
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71iMbefozzL._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3FHK5Bl"}
          productTitle={"Einstein Box Science Experiment Kit for Kids Aged 8-12-14 | STEM Projects | STEM Toys | Gift for 8-12 Year Old Boys & Girls | Chemistry Kit Set for 8-14 Year Olds"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/7139FuqxgjL._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3YRCXZS"}
          productTitle={"WireScorts Bot Robot Toy (Multicolor)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/51AeNwFhGdL._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3ZYk73S"}
          productTitle={"Babique Unicorn Teddy Bear Plush Soft Toy Cute Kids Birthday Animal Baby Boys/Girls (25 cm, Pink )"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/61RbsqvCXbL._SY679_.jpg"}
          productImgUrl={"https://amzn.to/3JdlfKq"}
          productTitle={"Fisher-Price Plastic Original Rock-a-Stack - Classic stacking toy with 5 colorful rings to grasp, shake, and stack ( Multicolor ) (1 pieces)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/614hC7xBgtL._SX522_.jpg"}
          productImgUrl={"https://amzn.to/42b2kbC"}
          productTitle={"FunBlast DIY Plastic Building Blocks for Kids Puzzle Games for Kids, Toys for Children Educational & Learning Toy for Kids, Girls & Boys - (250+ Blocks with 38 Wheels) Multicolor (250 pieces)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/71eEHpwhkML._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3ldBcbx"}
          productTitle={"Barbie Chelsea Doll & Travel Fun"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/719FfGa6HRL._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3J69Go4"}
          productTitle={"SHINETOY ENTERTAIN KIDS TikTok Dancing Plush Toy (Talking Cactus)"}
        />
        <MainCard
          productImg={"https://m.media-amazon.com/images/I/81FIqPJQ+lL._SX522_.jpg"}
          productImgUrl={"https://amzn.to/3Fn9bVU"}
          productTitle={"LEGO BrickHeadz Star Wars The Mandalorian & The Child 75317 Building Kit (295 Pieces)"}
        />
      </Carousel>
    </div>
  )
}

export default MainBody
