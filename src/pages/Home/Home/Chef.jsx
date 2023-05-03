import React from 'react';
import { FaBriefcase, FaBreadSlice, FaHandPeace } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
  const {
    chef_id,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
    chef_picture,
  } = chef;
  return (
    <div>
      <div className="card lg:card-side bg-slate-50 shadow-sm mb-6">
        <figure className="md:h-64 md:w-80">
          <img
            className="h-full w-full object-cover"
            src={chef_picture}
            alt="Chef Image"
          />
        </figure>
        <div className="card-body pt-10">
          <h2 className="card-title text-2xl">{chef_name}</h2>
          <div className="text-gray-600 text-xl md:text-xl">
            <span className="flex gap-2 justify-items-center items-center ">
              <FaHandPeace />
              Review: {likes}
            </span>
            <span className="flex gap-2 justify-items-center items-center">
              <FaBreadSlice />
              Recipes: {num_of_recipes}
            </span>
            <span className="flex gap-2 justify-items-center items-center">
              <FaBriefcase />
              Experience: {years_of_experience} years
            </span>
          </div>
          <div className="card-actions justify-end ">
            <Link to={`/chef/${chef_id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;