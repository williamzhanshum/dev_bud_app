import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Navbar2 from './components/Navbar2';
import Steps from './components/Steps';

function App() {
  return (
    <div>
      <Navbar2 />
      {/* <Navbar /> */}
      <Hero />
      {/* <hr /> */}
      <Steps />
    </div>
  );
}

export default App;
