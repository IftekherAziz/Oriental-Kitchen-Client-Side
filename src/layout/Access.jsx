import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';

const Access = () => {
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Access;