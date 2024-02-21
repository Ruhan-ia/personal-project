import  { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';



const SignUp = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {createUser, google} = useContext(AuthContext)
  const handleGoogle = () =>{
    google()
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      const user ={
        name:loggedUser.displayName,
        photo:loggedUser.photoURL,
        email:loggedUser.email
        ,
      }
       fetch('https://personal-project-server-mu.vercel.app/dashBoard/user', {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
    
      } )
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
      navigation(from, {replace:true})
    })
  }
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();
  const onSubmit= (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      profileUpdate(loggedUser, data.name , data.photo)

    })
    const profileUpdate = (user, name, photo ) =>{
      updateProfile(user, {
        displayName:name, photoURL:photo
      })
      .then(() =>{
        const user ={
          name:data.name,
          photo:data.photo,
          email: data.email,
        }
         fetch('https://personal-project-server-mu.vercel.app/dashBoard/user', {
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(user)
      
        } )
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.insertedId){
               
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })}
        })
         navigation(from, {replace:true})
        })
        .catch(error =>{
          console.log(error.message)
        })
    }
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input  {...register("name", { required: true })} type="text" placeholder="Your name" className="input input-bordered" required />

              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input  {...register("photo", { required: true })} type="url" placeholder="Your Photo URL" className="input input-bordered" required />
                  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                {errors.email && <span className='text-red-500 font-semibold '>Email is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true, maxLength: 20, minLength: 6 })} type="password" placeholder="password" className="input input-bordered" required />
                {errors.password && <span className='text-red-500 font-semibold '>Password is required</span>}

              </div>
              <div className="form-control mt-6">
                <p>Already have an account? please<Link to='/login'> <span className='text-red-400 font-semibold '>Login</span></Link></p>
                <input type="submit" value="Sign Up"  className="btn btn-primary" />
              </div>
              <div className='text-center'>
              <button onClick={handleGoogle} className="btn btn-circle btn-outline ">
              <FcGoogle className='text-xl font-bold' />
                  
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;