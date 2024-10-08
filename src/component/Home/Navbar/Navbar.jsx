import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../Hook/useCart";
import { BsCart3 } from "react-icons/bs";

import SearchProduct from "../../SearchProduct/SearchProduct";
import useAdmin from "../../../Hook/useAdmin";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] =useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(() => {});
  };
  return (
    <div className="navbar bg-black  bg-opacity-5 z-10 fixed ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="text-cyan-400 font-semibold ">
            <Link to="/dashBoard/cart"><BsCart3 className="font-bold text-3xl  text-rose-600"></BsCart3>Cart
            
            <span className="badge badge-secondary">
                +{cart?.length || 0}
              </span></Link>
          </li>
            
            {
              user && isAdmin &&  <li className="text-cyan-400 font-semibold ">  <Link to="/dashBoard/adminHome">
              Dashboard
              
            </Link></li>
            }
            {
                user && !isAdmin &&  <li className="text-cyan-400 font-semibold ">  <Link to="/dashBoard/userHome">
                Dashboard
                
              </Link></li>
            }
            
          </ul>
        </div>

          <a className="btn btn-ghost w-auto lg:text-xl">
            <span className="font-bold text-orange-500 lg:text-3xl">Action</span>
            <span className="font-bold text-green-600 lg:text-2xl">Cars</span>
          </a>
        
      </div>

      <div className="navbar-center  ">
    <SearchProduct></SearchProduct>
       
      </div>
      <div className="navbar-end ">
      {user &&  <div className="avatar items-center">
    <div className="w-12 rounded-full">
      <img src={user.photoURL}/>
    </div>
  </div>}
        <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-cyan-400 font-semibold ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-cyan-400 font-semibold ">
            <Link to="/about">About</Link>
          </li>
          <li className="text-cyan-400 font-semibold ">
            <Link to="/dashBoard/cart"><BsCart3 className="font-bold text-3xl  text-rose-600"></BsCart3>Cart
            <span className="badge badge-secondary">
                +{cart?.length || 0}
              </span>
            </Link>
          </li>
          {
              user && isAdmin &&  <li className="text-cyan-400 font-semibold ">  <Link to="/dashBoard/adminHome">
              Dashboard
              
            </Link></li>
            }
            {
                user && !isAdmin &&  <li className="text-cyan-400 font-semibold ">  <Link to="/dashBoard/userHome">
                Dashboard
                
              </Link></li>
            }
        </ul>
        </div>
      
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn  sm:w-auto text-white bg-gradient-to-r from-sky-300 via-purple-400 to-pink-400 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn sm:w-auto  text-white bg-gradient-to-r from-sky-300 via-purple-400 to-pink-400 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
