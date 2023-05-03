import React from 'react';
import Chefs from './Chefs';
import Banner from './Banner';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div className='px-5 md:px-36'>
      <Banner></Banner>    
      <Chefs></Chefs>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;