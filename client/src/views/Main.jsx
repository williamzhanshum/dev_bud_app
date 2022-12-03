import React from 'react';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import Hero from '../components/Hero';
// import Navbar from './components/Navbar';
import Navbar2 from '../components/Navbar2';
import Steps from '../components/Steps';

const Main = () => {
  return (
    <div>
      <Navbar2 />
      {/* <Navbar /> */}
      <Hero />
      <Steps />
      <Features />
      <AboutUs />
    </div>
  );
};

export default Main;
