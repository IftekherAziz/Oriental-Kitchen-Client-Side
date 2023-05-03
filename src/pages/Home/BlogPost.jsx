import React from "react";

const BlogPost = ({ blog }) => {
  const { image, question, answer } = blog;
  return (
    <div className="m-auto overflow-hidden rounded-md shadow-lg cursor-pointer h-full w-96 bg-white">
      <div className="block w-full h-full">
        <img
          alt="blog photo"
          src={image}
          className="object-cover w-full max-h-40"
        />
        <div className="w-full p-4 bg-whit">
          <p className="mb-2 text-xl font-medium">{question}</p>
          <p className=" text-gray-500 font-medium text-sm text-justify">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
