import React from 'react';
import User from './User';
import {AiOutlineUserAdd} from 'react-icons/ai'
import './user.css'

const Users = ({users,onClick}) => {
  return <div className='usersInProject'>
        <div className="usersHeader">Users</div>

        {users.map((user)=>(
            <User key={user.Id} user={user}/>
        ))}
        <div className="addUserToProject"><AiOutlineUserAdd onClick={onClick} className='addUserBtn' size={50} color='#00ebb8'/></div>
  </div>;
};

export default Users;
