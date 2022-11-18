import React from 'react';
import defaultPic from '../assets/default-profile-icon.png';

const DevCard = () => {
  return (
    <div className='md:w-[700px] w-[80%] bg-white mx-auto my-6 p-10 rounded-xl shadow-xl relative md:pl-60 pt-52 md:pt-10 mt-14 md:mt-6 hover:scale-105 ease-out duration-500 '>
      <div className='absolute md:-left-8 left-0 md:h-full md:top-0 -top-8 md:w-[250px] flex items-center justify-center w-full'>
        <img
          className='rounded-xl shadow-lg w-[90%] h-52 object-cover'
          src={defaultPic}
        />
      </div>
      <h1 className='md:text-4xl text-3xl font-semibold'>Joe Smith</h1>
      <p className=' mt-4 leading-loose'>
        Learn the basics of web developement with this course. You will be able
        to understand how to build basic websites from scratch.
        <br />
        <span className='font-extrabold'>Languages:</span> Java, Python,
        JavaScript, C#
      </p>

      <div className='flex gap-5 mt-4 flex-col md:flex-row'>
        <button className='rounded-md px-8 py-2 text-white border bg-black hover:bg-transparent hover:text-black hover:border-black'>
          View Profile
        </button>
        <button className='rounded-md px-8 py-2 border border-black bg-transparent hover:bg-black hover:text-white'>
          Message me
        </button>
        {/* <button className='rounded-md px-8 py-2 border border-black bg-transparent hover:scale-105 ease-out duration-500'>
          Message me
        </button> */}
        {/* <button>Let's Chat</button> */}
      </div>
    </div>
  );
};

export default DevCard;
