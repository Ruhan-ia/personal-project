import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../Hook/useCart";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Details = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();

  const { name, image, rating, price, _id } = details;
  console.log(details);

  const handleCart = (details) => {
    if (user && user.email) {
      console.log(user.email, details)
      const product = {
        image,
        toyID: _id,
        name,
        rating,
        price,
        email: user.email,
      };

      axiosSecure.post('/dashBoard/carts', product)
      
        
        .then((res) => {
          if(res.data.insertedId){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name}successfully added to cart!!`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/dashBoard/cart')
          }
        });
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-auto lg:w-[50%] rounded">
          <img src={image} />
        </div>
      </div>{" "}
      <div className="card-body ">
        <h2 className="card-title font-bold text-red-600 text-3xl">{name}</h2>
        <p>
          {" "}
          <span className="font-semibold text-green-400 text-2xl py-10">
            Ratings:{rating}
          </span>{" "}
          <br />
          <span className="font-spaceGrotest font-thin text-gray-400    ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            recusandae, corrupti quod rerum qui fuga ab repellendus, cumque
            tenetur blanditiis, excepturi aperiam impedit nostrum ea aliquam?
            Libero quibusdam explicabo et.
          </span>{" "}
          <br /> <br />
          <span className="font-semibold text-green-400 text-2xl ">
            Price:${price}
          </span>
        </p>
        <div className="card-actions justify-end">
          {user ? (
            <>
              <button
                className="btn   text-white bg-gradient-to-r from-sky-300 via-purple-400 to-pink-400 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500"
                onClick={handleCart}
              >
                Add To Cart
              </button>
            </>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                className="btn  text-white bg-gradient-to-r from-sky-300 via-purple-400 to-pink-400 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500"
              >
                Add To Cart
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
