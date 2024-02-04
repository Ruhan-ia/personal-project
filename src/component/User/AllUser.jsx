import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Users from './Users/Users';

const AllUser = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/dashBoard/user")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
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