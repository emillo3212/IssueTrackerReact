import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import UserToModalList from '../users/userToModalList';
import './CreateTicketModal.css'
import UserToTicketModal from './UserToTicketModal';
import SimpleBar from 'simplebar-react';

const CreateTicketModal = ({listaUsers,assignUser}) => {
  
  const [activeUser,setActiveUser] = useState("")

  const [searchUser,setSearchUser] = useState("")


  const clicked = (user) =>{
    if(activeUser!==user)
    {
      setActiveUser(user)
      console.log(user)
    }
     
  }

  return <div className='createTicketModal'>
      <Row >
        <div className='createTicketHeader'>Create ticket</div>
        <Col md={7}>
          <Row>
            <div className='createTicketTittle'>Tittle</div>
            <input className='createTicketTitleInput col-10' type="text" placeholder='set tittle for ticket...' />
          </Row>
          <Row>
            <div className='createTicketTittle'>Description</div>
            <textarea className='createTicketTitleInput col-10' type="textarea"  placeholder='specify your ticket...' 
                      style={{maxHeight:300,height:300,resize:'none', marginTop:5}}
                      maxLength={600} />

          </Row>
        </Col>
        <Col md={{span:5}}>
          <Row >
            <div className='createTicketTittle'>Assign user</div>
            <div className='createTicketAddUsers justify-content-center'>
              <input className='createTicketTitleInput' type="text" placeholder='search user....' 
                    style={{backgroundColor:'#191b1d',marginLeft:'auto'}}
                    onChange={(event) => {
                      setSearchUser(event.target.value)
                      }}/>

              <SimpleBar style={{maxHeight:216,padding:10}}>
                  {listaUsers.filter((val)=>{
                     if(searchUser==""){
                      return val;
                      }else if(val.Name.toLowerCase().includes(searchUser.toLowerCase())){
                      return val;
                    }}).map((userr)=>(
                      <UserToTicketModal key={userr.Id} user={userr} selected={activeUser} assignUser={assignUser} clicked={clicked}  />
                  ))}
                 
               
              </SimpleBar>
             
            </div>
          </Row>
          <Row>
              <select>
                <option value={'High'}>High</option>
                <option value={'Medium'}>Medium</option>
                <option value={'Low'}>Low</option>
              </select>
          </Row>
        </Col>

      </Row>
      <Row className='justify-content-center'>
          <button className='col-5 p-2 m-4 btn' style={{background:'#00a3ff', color:'white',fontWeight:'bold'}}>Add</button>
      </Row>
  </div>;
};

export default CreateTicketModal;
