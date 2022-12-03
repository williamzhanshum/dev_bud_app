import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const Features = () => {
  return (
    <div name='features' className='w-full py-24 mt-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-600 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          deleniti consequatur quo reiciendis nesciunt cum impedit earum?
          Perspiciatis, a fuga?
        </p>

        {/* Cards container */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {/* Individual Cards */}
          <div className='flex shadow-xl'>
            <div>
              <AiOutlineCheck className='w-7 mr-4 text-green-600 font-bold text-2xl' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Built in IDE</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                nostrum cupiditate fugit deserunt fuga perferendis.
              </p>
            </div>
          </div>

          {/* Individual Cards */}
          <div className='flex shadow-xl'>
            <div>
              <AiOutlineCheck className='w-7 mr-4 text-green-600 font-bold text-2xl' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Group Video Chat</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                nostrum cupiditate fugit deserunt fuga perferendis.
              </p>
            </div>
          </div>

          {/* Individual Cards */}
          <div className='flex shadow-xl'>
            <div>
              <AiOutlineCheck className='w-7 mr-4 text-green-600 font-bold text-2xl' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Group Chat App</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                nostrum cupiditate fugit deserunt fuga perferendis.
              </p>
            </div>
          </div>

          {/* Individual Cards */}
          <div className='flex shadow-xl'>
            <div>
              <AiOutlineCheck className='w-7 mr-4 text-green-600 font-bold text-2xl' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Collaboration</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                nostrum cupiditate fugit deserunt fuga perferendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
