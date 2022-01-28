import React from 'react';
import User from './User';

import './user.css'

const Users = ({users}) => {
  return <>
    <div className="usersHeader">Assigned</div>

    {users.map((user)=>(
        <User key={user.Id} user={user}/>
    ))}
  </>
        
        
  
};

export default Users;
