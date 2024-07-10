import React, { useEffect, useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const ScrollUp = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 250){
                setScroll(true)

            }
            else{
                setScroll(false)
            }
        })
    }, [])

    const handleScroll = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }
    return (
        <div className='fixed bottom-10 right-10'>
           { scroll && (<button className='btn rounded-full border-none font-semibold  font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  text-2xl' onClick={handleScroll}>
                <BsArrowUpCircle></BsArrowUpCircle>
            </button>)}
        </div>
    );
};

export default ScrollUp;