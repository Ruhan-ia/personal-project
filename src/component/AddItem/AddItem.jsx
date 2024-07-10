import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const imageToken= import.meta.env.VITE_Image_Hosting_Token;
 
const AddItem = () => {
const [axiosSecure] = useAxiosSecure()
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
  


    const formData = new FormData();
    formData.append('image', data.image[0])
    console.log(data);

    fetch(`https://api.imgbb.com/1/upload?key=${imageToken}`, {
      method:'POST',
     
      body:formData
    })
    .then(res => res.json())
    .then(imageUrl =>{
     console.log(imageUrl)
     if(imageUrl.success){
      const url = imageUrl.data.display_url;
      const {name, category, price, age, brand, rating} = data;
      const newItem = {name, category, price:parseFloat(price), age, brand, rating:parseFloat(rating), image:url}
      console.log(newItem)
      axiosSecure.post('/details', newItem)
      .then(data =>{
        if(data.data.insertedId){
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
     }
    })
  };
  console.log(imageToken)
  return (
    <div  className="card shrink-0 w-auto lg:w-full mx-auto my-auto flex justify-items-center justify-center items-center max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Toy name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select {...register("category", { required: true })}
          type="text"
          placeholder="Toy Category"
          className="input input-bordered"
          required>
            <option>top</option>
            <option>normal</option>
          </select>
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>

          <input
            {...register("image", { required: true })}
            type="file"
            placeholder="Toy Photo URL"
            className="file-input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <select {...register("age", { required: true })}
          type="number"
          placeholder="Ages"
          className="input input-bordered"
          required>
            <option>3-4</option>
            <option>5-7</option>
            <option>8-9</option>
            <option>10-11</option>
            <option>11-12</option>
          </select>
         
          {errors.age && (
            <span className="text-red-500 font-semibold ">Age is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <select {...register("brand", { required: true })}
          type="text"
          placeholder="Brand"
          className="input input-bordered"
          required>
            <option>lego</option>
            <option>fp</option>
            <option>hasbro</option>
            <option>mattel</option>
            <option>tomiyama</option>
          </select>
          
          {errors.brand && (
            <span className="text-red-500 font-semibold ">
              Brand is required
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>

          <input
            {...register("rating", { required: true })}
            type="number"
            placeholder="Rating"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>

          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Price"
            className="input input-bordered"
            required
          />
        </div>

        <div className="text-center">
          <button  className="btn btn-circle btn-outline ">
            Add Item
          </button>
        </div>
      </form>{" "}
    </div>
  );
};

export default AddItem;
