import React, { useEffect, useState } from 'react';
import axios from 'axios';
import willLiu from '../assets/will_liu.jpg';

const DevModal = ({ openModal, onClose, oneDevId }) => {
  const [theDev, setTheDev] = useState({});

  useEffect(() => {
    console.log('HERE IS ID:', oneDevId);
    axios
      .get(`http://localhost:8000/api/devs/${oneDevId}`)
      .then((res) => {
        // console.log('<<<<<<<<', res.data);
        setTheDev(res.data);
      })
      .catch((err) => console.log(err));
  }, [oneDevId]);

  if (!openModal) return null;

  return (
    <div
      onClick={onClose}
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50'
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='w-full md:w-1/3 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white'
      >
        <img
          className='w-40 mx-auto mt-[-3rem] rounded-xl object-cover'
          src={willLiu}
          alt='profile-pic'
        />
        <h2 className='text-3xl font-bold text-center py-4 mt-4'>
          First name:
          {console.log('------------->', theDev.dev.lastName)}
        </h2>

        <div className='p-10 align-middle'>
          <div className='grid grid-cols-3 text-lg mb-4'>
            <p className='font-semibold'>Description</p>
            <p className='col-span-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              voluptas eligendi corrupti maiores dicta aliquam mollitia placeat
              eaque dolore voluptatum!
            </p>
          </div>

          <div className='grid grid-cols-3 text-lg mb-4'>
            <p className='font-semibold'>Languages</p>
            <p className='col-span-2'>JavaScript, Python, C#</p>
          </div>

          <div className='grid grid-cols-3 text-lg mb-4'>
            <p className='font-semibold'>Experience</p>
            <p className='col-span-2'>10+ years</p>
          </div>

          <div className='grid grid-cols-3 text-lg mb-4'>
            <p className='font-semibold'>Education</p>
            <p className='col-span-2'>University of California, Riverside</p>
          </div>

          <div className='flex p-4 align-middle justify-center gap-10'>
            <button
              onClick={onClose}
              className='rounded-md px-8 py-2 text-white border bg-black hover:bg-transparent hover:text-black hover:border-black'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevModal;
