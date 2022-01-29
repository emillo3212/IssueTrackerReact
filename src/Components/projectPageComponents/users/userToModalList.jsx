import React, { useEffect, useState } from 'react';
import './userModal.css'
import 'simplebar/dist/simplebar.min.css';

const UserToModalList = ({add,addUsersToList,deleteUserFromList}) => {

    const [selected,setSelected]= useState(false)
    

  return (
    <div onClick={()=>{setSelected(!selected);!selected ? addUsersToList(add) : deleteUserFromList(add.Name)}} className='userFromList' style={{background: (selected) ? '#00a3ff':''}}> 
        {add.Name}
    </div>
  )
};

export default UserToModalList;
