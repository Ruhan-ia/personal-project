import React, { useRef } from "react";
import ByBrands from "./ByBrands/ByBrands";
import gsap from "gsap";
import { useIntersection } from "react-use";
import age1 from '../../assets/toys/age11.jpg';
import age2 from '../../assets/toys/age22.jpg';
import age3 from '../../assets/toys/age33.jpg';
import age4 from '../../assets/toys/age44.jpg';
import age5 from '../../assets/toys/age55.jpg';
import { Link } from "react-router-dom";
const WaysToShop = () => {
  const section3 = useRef(null);
  const intersection = useIntersection(section3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  const fadeIn = (e) => {
    gsap.to(e, {
      opacity: 1,
      y: -40,
      

      duration: 1,
      ease: "ease",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut = (e) => {
    gsap.to(e, {
      opacity: 0,
      
      y: -40,
      duration: 1,
      ease: "easeOut",
    });
  };
  intersection && intersection.intersectionRatio < 0.4
    ? fadeOut(".fadein3")
    : fadeIn(".fadein3");
  return (
    <section className="mt-20 fadein3" ref={section3}>
      <h1 className="font-spaceGrotest text-6xl text-center font-bold">
        <span className="text-green-600">Ways</span>{" "}
        <span className="text-orange-500 ">To</span>{" "}
        <span className="text-cyan-500">Shop</span>
      </h1>

      <h3 className="font-spaceGrotest text-2xl text-center font-bold py-10">
        By Age
      </h3>
      <div className="grid grid-cols-5 gap-3 items-center rounded bg-cyan-50">
        <div>
        <Link to='/3-4'>
        <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={age1} />
          </div>
        </div>
        <p className="font-spaceGrotest text-2xl text-center font-semibold py-3">3-4</p>
          </Link>
        </div>
         <div>
         <Link to='/5-7'>
         <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={age2} />
          </div>
        </div>
        <p className="font-spaceGrotest text-2xl text-center font-semibold py-3">5-7</p>
          </Link>
         </div>
        <div>
          <Link to='/8-9'>
        <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={age3} />
          </div>
        </div>
        <p className="font-spaceGrotest text-2xl text-center font-semibold py-3">8-9</p>
        </Link>
        </div>
       <div>
       <Link to='/10-11'>
       <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={age4} />
          </div>
        </div>
        <p className="font-spaceGrotest text-2xl text-center font-semibold py-3">10-11</p>
          </Link>
       </div>
       <div>
       <Link to='/11-12'>
       <div className="avatar">
          <div className="w-auto mask mask-squircle">
            <img src={age5} />
          </div>
        </div>
        <p className="font-spaceGrotest text-2xl text-center font-semibold py-3">11-12</p>
          </Link>
       </div>
      </div>

      <ByBrands></ByBrands>
    </section>
  );
};

export default WaysToShop;
