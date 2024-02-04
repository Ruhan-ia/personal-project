import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then((result) =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(() =>{

    })
  }
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
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>

              
            </li>
            
            <li>
            <Link to='/dashBoard'>Dashboard</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><span className="font-bold text-orange-500 text-3xl">Action</span><span className="font-bold text-green-600 text-2xl">Cars</span></a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-cyan-400 font-semibold ">
            <Link to='/'>Home</Link>
          </li>
          <li className="text-cyan-400 font-semibold ">
          <Link to='/about'>About</Link>
          </li>
          <li className="text-cyan-400 font-semibold ">
            <Link to='/dashBoard'>Dashboard</Link>
            </li>
         
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?<><button onClick={handleLogOut} className="btn">LogOut</button></>:
          <><Link to='/login' className="btn">Login</Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
