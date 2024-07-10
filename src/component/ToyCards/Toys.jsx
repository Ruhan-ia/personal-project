import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ t }) => {

    const {name,image,rating,price, _id}= t ;
    return (
        <div className="card w-auto rounded-bl-full card-side bg-base-100 shadow-xl">
        <div className="avatar">
  <div className="w-auto lg:w-2/3  rounded-bl-full">
    <img  src={image} alt="car"/>
  </div>
</div>        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
            <button className="btn text-white bg-gradient-to-r from-sky-300 via-purple-400 to-pink-400 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500">Details</button>

            </Link>
          </div>
        </div>
      </div>
    );
};

export default Toys;