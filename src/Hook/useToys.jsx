import { useQuery } from '@tanstack/react-query';

const useToys = () => {

    const {refetch, data: toys = []} = useQuery({
        queryKey:[ 'toy' ],
        queryFn:async () =>{
            const res = await fetch('https://personal-project-server-mu.vercel.app/details')
            return res.json()
        }

    })
    return [toys, refetch]
};

export default useToys;