import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {

    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: users = []} = useQuery({
        queryKey:[ 'user' ],
        queryFn:async () =>{
            const res = await axiosSecure.get('/dashBoard/user')
            return res.data;
        }

    })
    return [users, refetch]
};

export default useUser;