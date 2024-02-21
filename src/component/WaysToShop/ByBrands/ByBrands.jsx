import React from 'react';
import logo1 from '../../../assets/toys/fp.jpg';
import logo2 from '../../../assets/toys/lego.jpg';
import logo3 from '../../../assets/toys/hasbro2-1.png';
import logo4 from '../../../assets/toys/matellold-1.jpg';
import logo5 from '../../../assets/toys/tom.png';
import { Link } from 'react-router-dom';
const ByBrands = () => {
    return (
        <div>
             <h3 className="font-spaceGrotest text-2xl text-center font-bold py-10">
        By Brands
      </h3>
      <div className="grid grid-cols-5 gap-3 items-center bg-orange-50 rounded">
        <div>
          <Link to='/fp'>
        <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo1}/>
          </div>
        </div>
        </Link>
        </div>
         <div>
          <Link to='/lego'>
         <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo2} />
          </div>
        </div>
        </Link>
         </div>
        <div>
        <Link to='/hasbro'>
        <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo3} />
          </div>
        </div>
        </Link>
        </div>
       <div>
       <Link to='/mattel'>
       <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo4} />
          </div>
        </div>
        </Link>
       </div>
       <div>
       <Link to='/tomiyama'>
       <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo5} />
          </div>
        </div>
        </Link>
       </div>
      </div>
        </div>
    );
};

export default ByBrands;