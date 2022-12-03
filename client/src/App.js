import React from 'react';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import FindDev from './views/FindDev';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/devs' element={<FindDev />} />
      </Routes>
    </div>
  );
}

export default App;
