import React, { useState } from 'react';
import DevList from '../components/DevList';
import DevModal from '../components/DevModal';
import Navbar2 from '../components/Navbar2';

const FindDev = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div>
        <Navbar2 />
        <DevList />
      </div>
      <DevModal open={openModal} />
    </div>
  );
};

export default FindDev;
