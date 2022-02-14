import React from 'react'
import { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import './createProjectModal.css'
import SimpleBar from 'simplebar-react';
import UserToProjectModal from './UserToProjectModal';

const CreateProjectModal = ({users,AddNewProject,currentUser,error}) => {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [selectedUsers,setSelectedUsers] = useState([]);
    const [selected,setSelected] = useState(false);

    const SelectedUsers = (user) => {
        setSelectedUsers(selectedUsers=>[...selectedUsers,user])
    }

    const UnSelectedUsers = (user) =>{
        let u = selectedUsers.filter(x=>(x.id!==user.id))
        setSelectedUsers(u);
    }

    const CratePoroject = () =>{
        let us = [];
        selectedUsers.map((u)=>{
            let a ={
                userId: u.id
            }
            us.push(a);
        })

        let project = {
            name:name,
            description:description,
            users:us
        }

        AddNewProject(project);
    }



  return (<div className='createProjectModal'>
      <Row>
         <div className='createProjectTittle'>Create Project</div>
         {<div className='error'>{error}</div>}
         <Col md={7}>
            <div className='createProjectHeader'>Name</div>
            <input className='createTicketTitleInput col-10' type="text" placeholder='set tittle for project...' 
                    onChange={(ev)=>{
                        setName(ev.target.value)
                    }}/>

            <div className='createProjectHeader'>Description</div>
            <textarea className='createTicketTitleInput col-10' type="textarea"  placeholder='What it is about...' 
                      style={{maxHeight:300,height:300,resize:'none', marginTop:5}}
                      maxLength={600}
                      onChange={(e)=>{
                        setDescription(e.target.value)
                      }} />
         </Col>
         <Col>
            <div className='createProjectHeader'>Assign user</div>               
                <SimpleBar style={{borderRadius:25,padding:15,backgroundColor:'#24282b',maxHeight:390,padding:10}}>
                    {users.filter(x=>x.id!==currentUser.id).map((user)=>(
                        <UserToProjectModal key={user.id} user={user} SelectedUsers={SelectedUsers} UnSelectedUsers={UnSelectedUsers} />
                    ))}
                
                
                </SimpleBar>
         </Col>
        <Row className='justify-content-center '>
         <button onClick={(()=>CratePoroject())} className='col-5 p-2 btn' style={{background:'#16a3db',color:'white',fontWeight:'bold'}}>Create</button>
        </Row>
      
                        
      </Row>
 </div>
      )
 
}

export default CreateProjectModal