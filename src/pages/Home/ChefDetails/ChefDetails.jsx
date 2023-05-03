import React from "react";
import { useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import cooking from "../../../assets/animation/cooking.json";
import ChefRecipes from "./ChefRecipes";


const ChefDetails = () => {
  const chef = useLoaderData();
  const {
    chef_id,
    chef_name,
    chef_picture,
    years_of_experience,
    num_of_recipes,
    likes,
    bio,
  } = chef;
   console.log(chef);
  return (
    <div className="px-5 md:px-36">
      <div className="p-5 md:p-10">
        {/* top part start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center items-center">
          <div>
            <Lottie
              className="h-[50vh] md:h-[70vh] w-[50vh] md:w-[70vh]"
              animationData={cooking}
              loop={true}
            />
          </div>
          <div>
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img src={chef_picture} alt="Chef Picture" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl text-white">{chef_name}</h2>
                <div className="flex flex-col">
                  <p className="text-2xl text-white">
                    Years of experience:
                    <span className="text-pink-200">
                      {years_of_experience}
                    </span>{" "}
                  </p>
                  <p className="text-2xl text-white">
                    Number of recipes:{" "}
                    <span className="text-pink-200">{num_of_recipes}</span>{" "}
                  </p>
                  <p className="text-2xl text-white">
                    Got Likes: <span className="text-pink-200">{likes}</span>
                  </p>
                  <p className="text-2xl text-white">
                    Bio: <span className="text-pink-200">{bio}</span>
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    Check recepies below
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* top part end */}
        <ChefRecipes key={chef_id} chef={chef}></ChefRecipes>
      </div>
    </div>
  );
};

export default ChefDetails;
