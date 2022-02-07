import React from 'react';

const User = ({user}) => {
  return <div className='user'>
      {user.firstName}  {user.lastName}
  </div>
};

export default User;
