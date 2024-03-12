import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user, loader} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: cart = []} = useQuery({
        queryKey:[ 'carts', user?.email ],
        enabled: !loader,
        // queryFn:async () =>{
        //     const res = await fetch(`https://personal-project-server-mu.vercel.app/dashBoard/carts?email=${user?.email}`, 
            
        //     {headers: {
        //         authorization : `bearer ${token}`
        //     }})
        //     return res.json()
        // }
        queryFn:async () =>{
            const res = await axiosSecure(`/dashBoard/carts?email=${user?.email}`)
            return res.data;
        }

    })
    return [cart, refetch]
};

export default useCart;