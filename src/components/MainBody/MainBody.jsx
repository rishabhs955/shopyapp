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

function MainBody() {

  return (
    <div>
      <h1 className='MainCardsHeading'>Fashion</h1>
      <Carousel indicators={false}>
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
      <Carousel indicators={false}>
        <Carousel.Item interval={100000}>
          <CardGroup>
            <MainCard
              productImg={elec0}
              productTitle={"MSI GF63 Thin Core i5 10th Gen - (8 GB/1 TB HDD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Max Q/60 Hz) GF63 Thin 10SCXR-1618IN / GF63 Thin 10SC-612IN Gaming Laptop  (15.6 inch, Black, 1.86 KG)"}
            // productDesc={"
            //   The MSI GF63 Thin 10SCXR-1618IN Gaming Laptop is a power-packed, portable, and stylish device that lets you enjoy immersive gaming sessions anywhere and anytime. This laptop features the GeForce GTX 1650 Max-Q for impressive graphics performance, Audio Boost for lossless sound, and a Sided Thin Bezel Design for wide, distraction-free visuals."
            // }
            />
            <MainCard
              productImg={elec1}
              productTitle={"ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) FX506LHB-HN358W Gaming Laptop  (15.6 inch, Black Plastic, 2.30 kg kg)"}
            />
            <MainCard
              productImg={elec2}
              productTitle={"APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)"}
              productDesc={"Raise the thrill in every game and add a little style to your gaming setup with the Asus TUF Gaming F15 laptop. It is equipped with a 10th Gen Intel Core H-Series processor and GeForce GTX 1650 GPU so that you can experience fast-paced and smooth gaming. And, with the desktop-style Keyboard setup and integrated backlights, you can indulge in gaming for hours without getting bored."}
            />
            <MainCard
              productImg={elec3}
              productTitle={"MSI Katana GF66 Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050 Ti/144 Hz) Katana GF66 12UD-472IN Gaming Laptop  (15.6 Inch, Black, 2.25 Kg)"}
            />
          </CardGroup>
        </Carousel.Item>
      </Carousel>



      <h1 className='MainCardsHeading'>Groceries</h1>
      <Carousel indicators={false}>
        <Carousel.Item interval={100000}>
          <CardGroup>
            <MainCard
              productImg={groc0}
              productTitle={"Delicious CASHEW WHOLE Cashews  (100 g)"}
            />
            <MainCard
              productImg={groc1}
              productTitle={"L'Oréal Paris Total Repair5 Combo with Keratin, Shampoo 704ml+ Conditioner 192.5ml+ Serum 40ml  (3 Items in the set)"}
            />
            <MainCard
              productImg={groc2}
              productTitle={"Pillsbury Chakki Fresh Whole Wheat Atta | 100% Wheat Atta| Upto 6 hours of Softness| 1kg"}
            />
            <MainCard
              productImg={groc3}
              productTitle={"Del Monte Tomato Ketchup - Classic Blend, 950g"}
            />
          </CardGroup>
        </Carousel.Item>
      </Carousel>
      <h1 className='MainCardsHeading'>Mobiles</h1>
      <Carousel interval={false}>
        <Carousel.Item interval={1000}>
          <CardGroup>
            <MainCard
              productImg={mob0}
              productTitle={"MOTOROLA g31 (Baby Blue, 128 GB)  (6 GB RAM)"}
            />
            <MainCard
              productImg={mob1}
              productTitle={"vivo T1X (Space Blue, 64 GB)  (4 GB RAM)"}
            />
            <MainCard
              productImg={mob2}
              productTitle={"IQOO Neo 6 5G (Cyber Rage, 128 GB)  (8 GB RAM)"}
            />
            <MainCard
              productImg={mob3}
              productTitle={"Infinix HOT 20 Play (Fantasy Purple, 64 GB)  (4 GB RAM)"}
            />
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <CardGroup>
            <MainCard
              productImg={mob4}
              productTitle={"REDMI Note 10S (Frost White, 64 GB)  (6 GB RAM)"}
            />
            <MainCard
              productImg={mob5}
              productTitle={"APPLE iPhone 13 (Midnight, 128 GB)"}
            />
            <MainCard
              productImg={mob6}
              productTitle={"Infinix Zero 5G 2023 (Coral Orange, 128 GB)  (8 GB RAM)"}
            />
            <MainCard
              productImg={mob7}
              productTitle={"REDMI Note 12 Pro+ 5G (Obsidian Black, 256 GB)  (8 GB RAM)"}
            />
          </CardGroup>
        </Carousel.Item>
      </Carousel>

      <h1 className='MainCardsHeading'>Grooming</h1>
      <Carousel indicators={false}>
        <Carousel.Item interval={1000}>
          <CardGroup>
            <MainCard
              productImg={groom0}
              productTitle={"NOVA NHT 1052 USB Trimmer 90 min Runtime 40 Length Settings  (Black)"}
            />
            <MainCard
              productImg={groom1}
              productTitle={"PARK AVENUE Essential Grooming Gifting Kit  (6 Items in the set)"}
            />
            <MainCard
              productImg={groom2}
              productTitle={"IQOO Neo 6 5G (Cyber Rage, 128 GB)  (8 GB RAM)"}
            />
            <MainCard
              productImg={groom3}
              productTitle={"MUUCHSTAC Skin Lightening Oil and Face Wash  (2 Items in the set)"}
            />
          </CardGroup>
        </Carousel.Item>
      </Carousel>

      <h1 className='MainCardsHeading'>Kids Section</h1>
      <Carousel indicators={false}>
        <Carousel.Item interval={1000}>
          <CardGroup>
            <MainCard
              productImg={kid0}
              productTitle={"Baby Smile Small Kids Cycle Toys / Baby Tricycle / Kids Trike 4006-Black Tricycle  (Black)"}
            />
            <MainCard
              productImg={kid1}
              productTitle={"Vivida Enterprise Dancing cactus Toy Talking Repeat Singing Toy 120 Songs (Green)  (Green)"}
            />
            <MainCard
              productImg={kid2}
              productTitle={"Mirana USB Rechargeable Racing RC Car | High Speed Remote Control Toy  (Pearl White)"}
            />
            <MainCard
              productImg={kid3}
              productTitle={"Babique Octopus Sitting Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls (17 cm)"}
            />
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <CardGroup>
            <MainCard
              productImg={kid4}
              productTitle={"Mayne Rechargeable Helicopter with Remote Control and Hand Sensor Toy for kids  (Yellow)"}
            />
            <MainCard
              productImg={kid5}
              productTitle={"Planet of Toys Heavy Duty Bow Arrow Set for Kids Age 5 -12 Years Outdoor Target Game Archery Archery Kit"}
            />
            <MainCard
              productImg={kid6}
              productTitle={"Prekrasna Portable 8.5 Inch LCD Writing Tablet / Drawing Board / Doodle Board / Writing Pad / slate for children"}
            />
            <MainCard
              productImg={kid7}
              productTitle={"Wembley USB Rechageable Hover Ball Indoor Football Soccer Game With Colorful LED (Grey) Hoverball"}
            />
          </CardGroup>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default MainBody
