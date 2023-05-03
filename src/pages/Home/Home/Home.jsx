import React from 'react';
import Chefs from './Chefs';
import Banner from './Banner';
import BannerTwo from './BannerTwo';

const Home = () => {
  return (
    <div className='px-5 md:px-36'>
      <Banner></Banner>    
      <Chefs></Chefs>
      <BannerTwo></BannerTwo>
    </div>
  );
};

export default Home;