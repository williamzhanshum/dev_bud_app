import React from 'react';
import willLiu from '../assets/will_liu.jpg';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineGlobal,
} from 'react-icons/ai';

const DevModal = ({ open }) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50'>
      <div className='w-full md:w-1/3 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white'>
        <img
          className='w-40 mx-auto mt-[-3rem] rounded-xl object-cover'
          src={willLiu}
          alt='profile-pic'
        />
        <h2 className='text-3xl font-bold text-center py-8'>William Liu</h2>
        <p className='text-center text-lg mb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore
          minus magni quod molestias autem voluptatem officia recusandae qui.
          Aliquid minima et iusto excepturi quod libero, voluptatem facilis qui
          magnam!
        </p>
        <div className='flex p-4 align-middle justify-center gap-10'>
          <a href='#'>
            <AiFillLinkedin className='text-3xl' />
          </a>
          <a href='#'>
            <AiOutlineGithub className='text-3xl' />
          </a>
          <a href='#'>
            <AiOutlineGlobal className='text-3xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevModal;
