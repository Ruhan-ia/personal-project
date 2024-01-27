import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';



const Login = () => {
  const {logIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();
  const onSubmit= (data) => {
    console.log(data)
    logIn(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You are successfully logged in!!',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace: true })
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input   {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className='text-red-500 font-semibold '>Email is required</span>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  {...register("password", { required: true, maxLength: 20, minLength: 6 })} type="password" placeholder="password" className="input input-bordered" />
          {errors.password && <span className='text-red-500 font-semibold '>Password is required</span>}

        </div>
        <div className="form-control mt-6">
            <p>Don't have an account? please <Link to='/signUp'><span className='text-red-400 font-semibold'>SignUp</span></Link></p>
           <input type="submit" value="Login" className="btn btn-primary"/>
        </div>
      </form>

    </div>
  </div>
</div>
    );
};

export default Login;