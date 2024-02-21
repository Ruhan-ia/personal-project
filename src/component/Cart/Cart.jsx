import React, { useContext, useEffect, useState } from 'react';
import Carts from './Carts/Carts';
import useCart from '../../Hook/useCart';

const Cart = () => {
    // const {user} = useContext(AuthContext)
    const [cart] = useCart();
    // const [products, setProducts] =useState([]);
    const total = cart.reduce((sum, toy) => toy.price + sum, 0)
    // useEffect(() =>{
    //     fetch(`https://personal-project-server-mu.vercel.app/dashBoard/carts?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, [])
    return (
        <div>
            <div className='flex justify-center items-center my-10 gap-5'>
           <h3 className='text-green-600 font-spaceGrotest font-bold text-4xl'>Total amount:  <span className='text-3xl text-red-500  font-semibold font-spaceGrotest'>${total}</span></h3>
            <div className="card-actions justify-end">
        <button className="btn btn-outline btn-secondary">Pay Now</button>
      </div>
      </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-center mx-auto'>
           {
            cart.map(product => <Carts key={product._id} product={product}></Carts>)
           }
        </div>
        </div>
    );
};

export default Cart;