import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Provider/AuthProvider';


const SignUp = () => {
  const {createUser} = useContext(AuthContext)
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
    })
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
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;