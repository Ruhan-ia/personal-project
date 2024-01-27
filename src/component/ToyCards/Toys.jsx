import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ t }) => {

    const {name,image,rating,price, _id}= t ;
    return (
        <div className="card rounded-bl-full card-side bg-base-100 shadow-xl">
        <div className="avatar">
  <div className="w-auto rounded-bl-full">
    <img  src={image} alt="car"/>
  </div>
</div>        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
            <button className="btn">Details</button>

            </Link>
          </div>
        </div>
      </div>
    );
};

export default Toys;