import toy8 from './../../assets/toys/toy-888.jpg';
import toy9 from './../../assets/toys/toy-999.jpg';
import toy10 from './../../assets/toys/toy-1111.jpg'
import toy11 from './../../assets/toys/toy-122.jpg'
import toy12 from './../../assets/toys/toy-133.jpg'
import toy13 from './../../assets/toys/toy-144.jpg';
import React, { useRef } from 'react';
import gsap, {  Power4 } from "gsap";
// import { useGSAP } from '@gsap/react';
import { useIntersection } from 'react-use';


const ToyCards = () => {
  const section = useRef(null)
  const intersection =  useIntersection(section, {
    root: null,
    rootMargin:'0px',
    threshold:.2
  });

  const fadeIn = e =>{
    gsap.to(e, {
      opacity:1,
      y:-60,
      delay:.1,

      duration:1,
      ease: "ease",
      stagger:{
        amount:.3
      }
    })
  }
  const fadeOut = e =>{
    gsap.to(e, {
      opacity:0,
      delay:.1,
      y:-20,
      duration:1,
      ease: "easeOut",
      
    })
  }
intersection &&  intersection.intersectionRatio < .2 ? 
 fadeOut(".fadein")
 :fadeIn(".fadein")

    return (
        <>
        <section ref={section}   className='mt-20 fadein '>
            <h1 className='font-bold p-10 text-6xl text-center font-spaceGrotest  text-orange-500'><span className='font-bold  text-6xl  text-green-600'>Top</span> Toys</h1>
        <div  className=' grid lg:grid-cols-3 gap-5  container mx-auto'>
            
        <div className="card rounded-bl-full card-side bg-base-100 shadow-xl">
        <div className="avatar">
  <div className="w-auto rounded-bl-full">
    <img  src={toy8} alt="car"/>
  </div>
</div>        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn ">Watch</button>
          </div>
        </div>
      </div>
      
            
        <div className="card rounded-bl-full card-side bg-base-100 shadow-xl">
        <div className="avatar">
  <div className="w-auto rounded-bl-full">
    <img  src={toy9} alt="car"/>
  </div>
</div>        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn ">Watch</button>
          </div>
        </div>
      </div>
      
            
        <div className="card rounded-bl-full card-side bg-base-100 shadow-xl">
        <div className="avatar">
  <div className="w-auto rounded-bl-full">
    <img  src={toy10} alt="car"/>
  </div>
</div>        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn ">Watch</button>
          </div>
        </div>
      </div>
      
            
        <div className="card rounded-bl-full card-side bg-base-100 shadow-xl">
        <div className="avatar">
  <div className="w-auto rounded-bl-full">
    <img  src={toy11} alt="car"/>
  </div>
</div>        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn ">Watch</button>
          </div>
        </div>
      </div>
      
            
        <div className="card rounded-bl-full card-side bg-base-100 shadow-xl">
        <div className="avatar">
  <div className="w-auto rounded-bl-full">
    <img  src={toy12} alt="car"/>
  </div>
</div>        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn ">Watch</button>
          </div>
        </div>
      </div>
      
            
        <div className="card rounded-bl-full card-side bg-base-100 shadow-xl">
        <div className="avatar">
  <div className="w-auto rounded-bl-full">
    <img  src={toy13} alt="car"/>
  </div>
</div>        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn ">Watch</button>
          </div>
        </div>
      </div>
      
</div>
</section>
      </>
    );
};

export default ToyCards;