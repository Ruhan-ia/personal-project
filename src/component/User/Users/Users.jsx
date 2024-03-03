import React from 'react';
import { FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';
import useUser from '../../../Hook/useUser';
import { RiAdminFill } from "react-icons/ri";

const Users = ({user}) => {
    const [, refetch] = useUser();
    const {email, name, photo, _id, role} = user;

    console.log(user)

    const handleMakeAdmin = user =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make it Admin!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://personal-project-server-mu.vercel.app/dashBoard/user/admin/${user._id}`,{
  
          method:'PATCH'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.modifiedCount){

              refetch();
              Swal.fire({
                title: `${user.name} is an Admin Now!`,
                text: "Your file has been modified.",
                icon: "success"
              });
            }
          })
          
          
         
        }
      });
    }

    const handleDelete = user =>{
      console.log(user)
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://personal-project-server-mu.vercel.app/dashBoard/user/${user._id}`,{
  
          method:'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){

              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
          
          
         
        }
      });
    }
    return (
    
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>

          </div>
        </td>
        <td>
       
              <div className="font-bold">{name}</div>
            
        </td>
        <td>
          {email}
        </td>
        <td>
          {role == 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)}><RiAdminFill className='text-2xl text-red-600 font-bold' /></button>}
        </td>
        <th>
          <button onClick={() => handleDelete(user)} className="btn btn-square btn-outline"><FaTrashCan className='text-2xl text-red-600 font-bold' /></button>
        </th>
      </tr>
      {/* row 2 */}
      
    </tbody>
    
    
    
  
    );
};

export default Users;