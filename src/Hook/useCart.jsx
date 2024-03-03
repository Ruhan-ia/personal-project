import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')


    const {refetch, data: cart = []} = useQuery({
        queryKey:[ 'carts', user?.email ],
        queryFn:async () =>{
            const res = await fetch(`https://personal-project-server-mu.vercel.app/dashBoard/carts?email=${user?.email}`, 
            
            {headers: {
                authorization : `bearer ${token}`
            }})
            return res.json()
        }

    })
    return [cart, refetch]
};

export default useCart;