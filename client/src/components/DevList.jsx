import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DevCard from './DevCard';

const DevList = () => {
  return (
    <div className='w-full py-12 px-4'>
      <div
        className='max-w-[1240px] mx-auto flex flex-col'
        id='cards-container'
      >
        <DevCard />
        <DevCard />
        <DevCard />
      </div>
    </div>
  );
};

export default DevList;
