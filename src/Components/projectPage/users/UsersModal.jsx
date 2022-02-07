import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './userModal.css'

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import UserToModalList from './userToModalList';

const UsersModal = ({projectId,lista,addUsersToList,updateUsers,deleteUserFromList}) => {
  
  const [searchUser,setSearchUser] = useState("")


  return (
  <div className='UsersMoal'>
    <Row className='justify-content-center'>
        <div className='usersModalHeader'>Add users to project</div>
        <div className='usersModalSearch'>
          <input className='usersModalSearchInput' type="text" name="name" placeholder='search...' 
          onChange={(event) => {
            setSearchUser(event.target.value)
            }}/>
        </div>
      <Col md={{span:8}} className='usersBackground' >
        <SimpleBar className='scroll px-3'>

          {lista.filter((val)=>{
              if(searchUser==""){
                return val;
              }else if(val.firstName.toLowerCase().includes(searchUser.toLowerCase())){
                return val;
              }}).map((add)=>(
              <UserToModalList key={add.id} add={add} addUsersToList={addUsersToList} deleteUserFromList={deleteUserFromList} />
            ))}

        </SimpleBar>
            
        
      </Col>
      <button onClick={updateUsers} className='col-5 p-2 m-4 btn' style={{background:'#00b552', color:'white',fontWeight:'bold'}}>Add</button>
       
    </Row>

  </div>)
};

export default UsersModal;
