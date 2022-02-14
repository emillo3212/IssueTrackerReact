import React, { useEffect, useState } from 'react';

const UserToProjectModal = ({user,SelectedUsers,UnSelectedUsers}) => {

    const [selected,setSelected]= useState(false)
    
    useEffect(()=>{
      if(selected){
        SelectedUsers(user);
      }else{
        UnSelectedUsers(user);
      }

    },[selected])

  return (
    <div onClick={()=>{setSelected(!selected);}} className='userFromList' style={{background: (selected) ? '#00a3ff':''}}> 
        {user.firstName} {user.lastName}
    </div>
  )
};
export default UserToProjectModal