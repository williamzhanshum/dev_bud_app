import React from 'react';
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
    </div>
  );
};

export default Main;
