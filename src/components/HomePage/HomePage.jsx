import React from 'react'
import NavBar from '../Navbar/NavBar';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import MainBody from '../MainBody/MainBody';
import TestSlider from '../TestSlider/TestSlider';

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <TestSlider/>
      <MainBody/>
      <Footer/>
    </div>
  )
}

export default HomePage
