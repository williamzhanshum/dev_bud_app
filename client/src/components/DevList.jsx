import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DevCard from './DevCard';
import DevModal from './DevModal';

const DevList = () => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/devs')
      .then((res) => {
        setDevs(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className='w-full py-12 px-4'>
        <div
          className='max-w-[1240px] mx-auto flex flex-col'
          id='cards-container'
        >
          {devs.map((oneDev, idx) => (
            <>
              <DevCard oneDev={oneDev} key={idx} />
              {/* <DevModal
                  key={idx}
                  oneDevId={oneDev._id}
                  openModal={openModal}
                  onClose={() => setOpenModal(false)}
                /> */}
            </>
          ))}
        </div>
        {/* {devs.map((oneDev, idx) => {
          console.log('>>>>>', oneDev._id);
          return (
            <DevModal
              key={idx}
              oneDevId={oneDev._id}
              openModal={openModal}
              onClose={() => setOpenModal(false)}
            />
          );
        })} */}
      </div>
      {/* <DevModal openModal={openModal} onClose={() => setOpenModal(false)} /> */}
    </div>
  );
};

export default DevList;
