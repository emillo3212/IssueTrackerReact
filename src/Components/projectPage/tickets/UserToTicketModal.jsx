import React, { useState } from 'react';

function UserToTicketModal({user,clicked,selected,assignUser}){

  return <div onClick={()=>{
              clicked(user);
              assignUser(user)}}
              className='userFromList'
              style={{backgroundColor: ((selected===user)) ? '#00a3ff':''}}>

              {user.Name}
          </div>;
};

export default UserToTicketModal;
