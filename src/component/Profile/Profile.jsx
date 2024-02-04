import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mt-10">
        
       {user && <><h1 className="font-spaceGrotest font-bold text-5xl text-center">{user.displayName}</h1>
       <h2 className="text-center font-spaceGrotest font-semibold text-4xl pt-4">{user.email}</h2>
       <div className="text-center pt-4">
       <div className="avatar">
              <div className="w-auto lg:w-52  rounded-xl">
                  <img src={user.photoURL} />
              </div>
          </div>
          </div></>}
    </div>
  );
};

export default Profile;
