import React, { useState } from 'react';

function UserToTicketModal({user,clicked,selected,assignUser,SelectedUsers}){

  return <div onClick={()=>{
              clicked(user);
              assignUser(user);
              SelectedUsers(user);}}
              className='userFromList'
              style={{backgroundColor: ((selected===user)) ? '#00a3ff':''}}>

              {user.firstName} {user.lastName}
          </div>;
};

export default UserToTicketModal;
