
// import { useGSAP } from '@gsap/react';
import Toys from './Toys';
import useToys from '../../Hook/useToys';
import animationData from '../../assets/car.json'
import Lottie from 'react-lottie-player';
import gsap from 'gsap';
import { useRef } from 'react';
import { useIntersection } from 'react-use';


const ToyCards = () => {
  const [toys] = useToys();
  const topToys = toys.filter(toy => toy.category === 'top')

 
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
    
    
    duration:1,
    ease: "ease",
    stagger:{
      amount:.3,
      
    }, 
  
  
  })
}
const fadeOut = e =>{
  gsap.to(e, {
    opacity:0,
    
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
          <div className='text-center  flex justify-center items-center mx-auto justify-items-center'>
           <div>
            <Lottie
            animationData={animationData}
            play
            loop
            style={{ width: 150, height: 150 }}></Lottie>
            </div>
          </div>
      <div  className=' grid lg:grid-cols-3 gap-5  container mx-auto'>
          {
            topToys.map(t => <Toys key={t.id} t = {t}></Toys>)
          }

    
</div>
</section>
    </>
  );
};

export default ToyCards;