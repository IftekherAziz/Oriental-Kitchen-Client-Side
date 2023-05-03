import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='min-h-[calc(100vh-350px)]'>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
