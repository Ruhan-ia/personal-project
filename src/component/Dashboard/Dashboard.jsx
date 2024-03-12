import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FcUndo } from "react-icons/fc";
import useCart from '../../Hook/useCart';
import useAdmin from '../../Hook/useAdmin';
const Dashboard = () => {
  const [cart] =useCart();

  // const isAdmin = true;
  // const isCoAdmin = true;
  const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
  
    {/* Page content here */}<Outlet></Outlet>
    
   
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {
      //   isCoAdmin ? <>
      //     <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/home'>
      //  Home
      // </Link></li>
      // <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/profile'>
      //  Profile
      // </Link></li>
      // <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/AllUser'>
      //  AllUser
      // </Link></li>
      // <li className="text-xl font-bold font-spaceGrotest    ">
      //     <Link to='/dashBoard/cart'>Cart
      //     <span className="badge badge-secondary">+{cart?.length || 0}</span>

      //     </Link>
      //     </li>
      //   </> : <>
      //     <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/home'>
      //  Home
      // </Link></li>
      // <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/profile'>
      //  Profile
      // </Link></li>
      
      // <li className="text-xl font-bold font-spaceGrotest    ">
      //     <Link to='/dashBoard/cart'>Cart
      //     <span className="badge badge-secondary">+{cart?.length || 0}</span>

      //     </Link>
      //     </li>
      //   </>
      }
      {
        isAdmin ? <>
          <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/home'>
       Home
      </Link></li>
      <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/profile'>
       Profile
      </Link></li>
      <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/addItem'>
       Add An Toy
      </Link></li>
      <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/AllUser'>
       AllUser
      </Link></li>
      <li className="text-xl font-bold font-spaceGrotest    ">
          <Link to='/dashBoard/cart'>Cart
          <span className="badge badge-secondary">+{cart?.length || 0}</span>

          </Link>
          </li>
        </>:<>
          <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/home'>
       Home
      </Link></li>
      <li className="text-xl font-bold font-spaceGrotest"><Link to='/dashBoard/profile'>
       Profile
      </Link></li>
      
      <li className="text-xl font-bold font-spaceGrotest    ">
          <Link to='/dashBoard/cart'>Cart
          <span className="badge badge-secondary">+{cart?.length || 0}</span>

          </Link>
          </li>
        </>
      }
      <li>
        <Link to='/'><span className='text-green-500 font-spaceGrotes font-semibold '>Go Back</span>< FcUndo ></FcUndo></Link>
      </li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;