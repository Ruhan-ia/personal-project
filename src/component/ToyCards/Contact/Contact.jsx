import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { useIntersection } from 'react-use';

const Contact = () => {
    const form = useRef();
    const section5 = useRef(null)
  const intersection =  useIntersection(section5, {
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
        amount:.3
      }
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
 fadeOut(".fadein5")
 :fadeIn(".fadein5")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1crdyv9', 'template_xdjndfk', form.current, 'hYjA53wqQMQtmk1U5')
      .then((result) => {
          console.log(result.text);
          <div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your Email sent successfully!</span>
</div>
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <section ref={section5} className='mt-20 fadein5'>
        <h1 className='font-bold p-10 text-6xl text-center font-spaceGrotest  text-orange-500'><span className='font-bold  text-6xl  text-green-600'>Contact</span> Us</h1>
          <div className='text-center'>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Type Your Name" name="user_name" className="input input-bordered input-accent lg:w-full max-w-xs " />
        
        <input type="email" placeholder="Type Your Email" name="user_email" className="ms-4 input input-bordered input-accent lg:w-full max-w-xs" />
          <br />
        <textarea name="message" className="textarea textarea-lg textarea-warning m-3 lg:w-full max-w-2xl" placeholder="message"></textarea>
        <br />
        <input className='btn btn-outline btn-warning m-3' type="submit" value="Send" />
      </form>
      </div>
      </section>
    );
};

export default Contact;