import React from 'react';
import { FaTrashCan } from "react-icons/fa6";


const Users = ({user}) => {

    const {email, name, photo} = user;
    console.log(user)
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
        <th>
          <button className="btn btn-square btn-outline"><FaTrashCan className='text-2xl text-red-600 font-bold' /></button>
        </th>
      </tr>
      {/* row 2 */}
      
    </tbody>
    
    
    
  
    );
};

export default Users;