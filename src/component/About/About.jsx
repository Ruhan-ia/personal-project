import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../../assets/car.json'
import animationData2 from '../../assets/Animation - 4.json'
import animationData3 from '../../assets/Animation -5.json'
const About = () => {
    return (
        <div>
          heloo for check 
            
           <div className='flex justify-center'>
            <Lottie animationData={animationData}
             play
             loop
             style={{ width: 500, height: 500 }}></Lottie>
            <Lottie animationData={animationData3}
             play
             loop
             style={{ width: 500, height: 500 }}></Lottie>
            <Lottie animationData={animationData2}
             play
             loop
             style={{ width: 500, height: 500 }}></Lottie>
           </div>
        </div>
    );
};

export default About;