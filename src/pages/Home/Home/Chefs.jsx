import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [more, setMore] = useState(false);

  useEffect(() => {
    fetch(`https://the-recipe-room-server-asif419.vercel.app/chefs`)
      .then(res => res.json())
      .then(data => {
        if (more) {
          setChefs(data)
        }
        else {
          setChefs(data.slice(0, 3))
        }
      })
  }, [more])
  return (
    <div className='p-5 md:p-10 py-10 md:py-16'>
      <div className='text-center mb-5'>
        <h2 className='text-1xl md:text-3xl'>
          <span className='underline decoration-base-200 text-4xl md:text-5xl pl-1 md:pl-2 font-bold'>Chefs</span>
          <span className='text-4xl md:text-5xl text-red-800'> list</span>
        </h2>
      </div>
      {
        chefs.map(chef =>
          <Chef
            key={chef.chef_id}
            chef={chef}
          >
          </Chef>
        )
      }
      <div className='text-center'>
        {
          more ?
            <button onClick={() => setMore(!more)} className="btn btn-secondary">Show Less</button> :
            <button onClick={() => setMore(!more)} className="btn btn-secondary">Show More</button>
        }
      </div>
    </div>
  );
};

export default Chefs;