import { useQuery } from '@tanstack/react-query';

const useUser = () => {

    const {refetch, data: users = []} = useQuery({
        queryKey:[ 'user' ],
        queryFn:async () =>{
            const res = await fetch('https://personal-project-server-mu.vercel.app/dashBoard/user')
            return res.json()
        }

    })
    return [users, refetch]
};

export default useUser;