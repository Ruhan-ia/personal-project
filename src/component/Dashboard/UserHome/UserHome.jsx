import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
              <h2>   Assalamualaikum! Welcome Back!
            </h2>
                {user?.displayName ? user.displayName :'back'}
        </div>
    );
};

export default UserHome;