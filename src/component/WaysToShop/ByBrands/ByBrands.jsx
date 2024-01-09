import React from 'react';
import logo1 from '../../../assets/toys/fp.jpg';
import logo2 from '../../../assets/toys/lego.jpg';
import logo3 from '../../../assets/toys/hasbro2-1.png';
import logo4 from '../../../assets/toys/matellold-1.jpg';
import logo5 from '../../../assets/toys/tom.png';
const ByBrands = () => {
    return (
        <div>
             <h3 className="font-spaceGrotest text-2xl text-center font-bold py-10">
        By Brands
      </h3>
      <div className="grid grid-cols-5 gap-3 items-center bg-orange-50 rounded">
        <div>
        <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo1}/>
          </div>
        </div>

        </div>
         <div>
         <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo2} />
          </div>
        </div>

         </div>
        <div>
        <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo3} />
          </div>
        </div>

        </div>
       <div>
       <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo4} />
          </div>
        </div>

       </div>
       <div>
       <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={logo5} />
          </div>
        </div>

       </div>
      </div>
        </div>
    );
};

export default ByBrands;