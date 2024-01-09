import React, { useRef } from "react";
import pic from "./../../assets/toys/toy-133.jpg";
import { useIntersection } from "react-use";
import gsap from "gsap";
const OurPolicy = () => {
  const section2 = useRef(null);
  const section3 = useRef(null);
  const intersection = useIntersection(section2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  const fadeIn = (e) => {
    gsap.to(e, {
      opacity: 1,
      y: -60,
      delay: 0.1,

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
      delay: 0.1,
      y: -20,
      duration: 1,
      ease: "easeOut",
    });
  };
  intersection && intersection.intersectionRatio < 0.4
    ? fadeOut(".fadein2")
    : fadeIn(".fadein2");
  
  return (
    <div>
      <section className="container mx-auto mt-20 fadein2 " ref={section2}>
        <div>
          <h1 className="text-center font-spaceGrotest   p-10">
            <span className="font-bold  text-6xl   text-green-600">Our</span>{" "}
            <span className="font-bold  text-6xl  text-orange-500 ">
              Policy
            </span>
          </h1>
        </div>

        <div className="container mx-auto justify-center  w-[100%] lg:flex gap-5">
          <div>
            <div className="flex  items-center text-center h-[100%]">
              <p className=" font-spaceGrotest sm:mb-10">
                <span className="font-semibold text-3xl text-green-600">
                  Description
                </span>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus eveniet non recusandae voluptatibus architecto
                porro laborum quos placeat! Labore blanditiis consequuntur ad
                nostrum exercitationem quidem fugiat quis fuga illo quod
                voluptates corporis veritatis, dolore in aliquam dolor atque
                placeat tempora eius. Quos in quibusdam nisi voluptates
                blanditiis velit quia dolorem!
              </p>
            </div>
          </div>
          <div className="w-auto rounded">
            <img src={pic} alt="car" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPolicy;
