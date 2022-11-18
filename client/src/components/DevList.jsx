import React from 'react';
import { Routes, Route } from 'react-router-dom';

const DevList = () => {
  return (
    <div className='w-full py-16 px-4 bg-green-200'>
      <div
        className='max-w-[1240px] mx-auto bg-sky-200 flex flex-col justify-center text-center'
        id='cards-container'
      >
        <div class='grid grid-rows-3 grid-flow-col gap-4'>
          <div class='row-span-3 border-2'>01</div>
          <div class='col-span-2 border-2'>02</div>
          <div class='row-span-2 col-span-2 border-2'>03</div>
        </div>
      </div>
    </div>
  );
};

export default DevList;
