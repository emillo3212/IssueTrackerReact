import React, { useEffect, useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import UserToModalList from '../users/userToModalList';
import './CreateTicketModal.css'
import UserToTicketModal from './UserToTicketModal';
import SimpleBar from 'simplebar-react';
import Select from 'react-select'
import { useParams } from 'react-router-dom'

const CreateTicketModal = ({listaUsers,assignUser,addTicket}) => {
  const {id} = useParams()
  const [activeUser,setActiveUser] = useState("")

  const [searchUser,setSearchUser] = useState("")

  const [tittle,setTittle] = useState("")
  const [description,setDescription] = useState("")
  const [created,setCreated] = useState("")
  const [CreatedBy,setCreatedBy]= useState("")
  const [assignedTo,setAssignedTo]= useState("")
  const [priority,setPriority] = useState("")
  
  const[message,setMessage]= useState("")
  const[validationModal,setValidationModal] = useState(false)

  const clicked = (user) =>{
    if(activeUser!==user)
    {
      setActiveUser(user)
    }
     
  }

  const options = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' }
  ]

  const colourStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: '#24282b',
      border:0,
      borderRadius:10,
      marginTop:5,
      fontWeight:'bold',
      color:'white',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor:"#24282b",
      borderRadius:25,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#292d30':'',
      borderRadius:25
    }),
    singleValue: (provided,state) => ({
      ...provided,
      color:'white'
    })
    
    
  };

  const ticketData = {
    name:tittle,
    description:description,
    assignToId:activeUser.id,
    
    priority:priority,
    projectId:id,
    createdById:2
  }
  const errorMessage = (error) =>{
    setMessage(error)
  }

  const validation = ()=>{
    if(tittle==""){
      var error = "Ticket must have a tittle"
      errorMessage(error)
      setValidationModal(true)
      return false
    }
    if(description==""){
      var error = "Ticket must have a description"
      errorMessage(error)
      setValidationModal(true)
      return false
    }
    if(activeUser==""){
      var error = "Ticket must have an user assigend"
      errorMessage(error)
      setValidationModal(true)
      return false
    }
    if(priority==""){
      var error = "Ticket must have a priority"
      errorMessage(error)
      setValidationModal(true)
      return false
    }
      return true
  }


  return <div className='createTicketModal'>
      <Row >
        <div className='createTicketHeader'>Create ticket</div>
        <Col md={7}>
          <Row>
            <div className='createTicketTittle'>Tittle</div>
            <input className='createTicketTitleInput col-10' type="text" placeholder='set tittle for ticket...' 
                    onChange={(ev)=>{
                      setTittle(ev.target.value)
                    }}/>
          </Row>
          <Row>
            <div className='createTicketTittle'>Description</div>
            <textarea className='createTicketTitleInput col-10' type="textarea"  placeholder='specify your ticket...' 
                      style={{maxHeight:300,height:300,resize:'none', marginTop:5}}
                      maxLength={600}
                      onChange={(e)=>{
                        setDescription(e.target.value)
                      }} />

          </Row>
        </Col>
        <Col md={{span:5}}>
          <Row >
            <div className='createTicketTittle'>Assign user</div>
            <div className='createTicketAddUsers justify-content-center'>
              <input className='createTicketTitleInput' type="text" placeholder='search user....' 
                    style={{backgroundColor:'#191b1d',marginLeft:'auto'}}
                    onChange={(event) => {
                      setSearchUser(event.target.value);
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
              <div className='createTicketTittle'>Priority</div>
              <Select isSearchable={false} options={options} styles={colourStyles} onChange={(e)=>{setPriority(e.value)}}/>
          </Row>
        </Col>

      </Row>
      <Row className='justify-content-center'>
          <button onClick={()=>{validation() && addTicket([ticketData])}} className='col-5 p-2 btn' style={{background:'#00a3ff', color:'white',fontWeight:'bold',borderRadius:10}}>Add</button>
      </Row>

      {(validationModal)&& <div className='ticketValidation'>{message}<br/>
      <button className='btn-danger px-5' onClick={()=>setValidationModal(false)}>ok</button>
      </div>}
  </div>;
};

export default CreateTicketModal;
