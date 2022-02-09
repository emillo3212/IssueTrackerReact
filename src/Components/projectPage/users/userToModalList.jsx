import React, { useEffect, useState } from 'react';
import './userModal.css'
import 'simplebar/dist/simplebar.min.css';

const UserToModalList = ({add,addUsersToList,deleteUserFromList}) => {

    const [selected,setSelected]= useState(false)
    
    useEffect(()=>{
      if(selected){
        addUsersToList(add);
      }else{
        deleteUserFromList(add);
      }

    },[selected])

  return (
    <div onClick={()=>{setSelected(!selected);}} className='userFromList' style={{background: (selected) ? '#00a3ff':''}}> 
        {add.firstName} {add.lastName}
    </div>
  )
};

export default UserToModalList;
