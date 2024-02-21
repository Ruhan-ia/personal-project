import { data } from 'autoprefixer';
import Users from './Users/Users';
import useUser from '../../Hook/useUser';

const AllUser = () => {
    const [users] = useUser();

    // useEffect(()=>{
    //     fetch("https://personal-project-server-mu.vercel.app/dashBoard/user")
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // }, [])
    return (
        <div className="overflow-x-auto ">
        <table className="table table-lg  ">
        <thead>
      <tr className='font-spaceGrotest font-bold text-xl  '>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
       
        
      </tr>
    </thead>
           { 
           
           users.map(user => <Users key={user._id} user= {user}></Users>) 
           }
         
    {/* foot */}
    
    
  </table>
</div>
    );
};

export default AllUser;