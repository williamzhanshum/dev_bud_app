import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Navbar2 = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 border-b'>
      {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
        <Link>DEVBUD.</Link>
      </h1> */}
      <Link className='text-3xl font-bold mr-4 sm:text-4xl' to='/'>
        DEVBUD.
      </Link>
      <ul className='hidden md:flex'>
        {/* LINK W/ SMOOTH SCROLL  */}
        {/* <li className='p-4 hover:scale-105 nav-link'>
          <Link to='steps' smooth={true} offset={50} suration={500}>
            How It Works
          </Link>
        </li>
        <li className='p-4 hover:scale-105 nav-link'>
          <Link to='test1' smooth={true} offset={50} suration={500}>
            Features
          </Link>
        </li>
        <li className='p-4 hover:scale-105 nav-link'>
          <Link to='test1' smooth={true} offset={50} suration={500}>
            About Us
          </Link>
        </li>
        <li className='p-4 hover:scale-105 nav-link'>Create Room</li> */}

        {/* --- Links W/O smooth scroll --- */}
        <li className='p-4 hover:scale-105 nav-link'>How It Works</li>
        <li className='p-4 hover:scale-105 nav-link'>Features</li>
        <li className='p-4 hover:scale-105 nav-link'>About Us</li>
        <li className='p-4 hover:scale-105 nav-link'>Create Room</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-200 bg-[rgb(255,255,255)] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='text-3xl font-bold mr-4 sm:text-4xl m-4 mb-2'>
          DEVBUD.
        </h1>
        <ul className=''>
          <li className='p-4 border-b nav-link'>How It Works</li>
          <li className='p-4 border-b nav-link'>Features</li>
          <li className='p-4 border-b nav-link'>About Us</li>
          <li className='p-4 border-b nav-link'>Create Room</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
