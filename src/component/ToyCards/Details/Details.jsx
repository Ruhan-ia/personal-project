import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();

  const { name, image, rating, price } = details;
  console.log(details)
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-auto lg:w-[70%] rounded">
          <img src={image} />
        </div>
      </div>{" "}
      <div className="card-body lg:w-[30%]">
        <h2 className="card-title font-bold text-red-600 text-3xl">{name}</h2>
        <p> <span className="font-semibold text-green-400 text-2xl py-10">Ratings:{rating}</span> <br /> 
        <span className="font-spaceGrotest font-thin text-gray-400    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae, corrupti quod rerum qui fuga ab repellendus, cumque tenetur blanditiis, excepturi aperiam impedit nostrum ea aliquam? Libero quibusdam explicabo et.</span> <br /> <br />
        <span className="font-semibold text-green-400 text-2xl ">Price:${price}</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-warning">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
