import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../../assets/Animation - 1.json'

const DashHome = () => {
    return (
        <div>
            <div className=' '>
      <div className=' w-auto lg:w-full  '>
      <Lottie 
              animationData={animationData}
              play
              loop
              ></Lottie>
      </div>
    </div>
        </div>
    );
};

export default DashHome;