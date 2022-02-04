import React from 'react';

const User = ({user}) => {
  return <div className='user'>
      {user.user.firstName}  {user.user.lastName}
  </div>
};

export default User;
