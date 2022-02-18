import React, { useState,useEffect,useRef } from 'react'

import {AiOutlineConsoleSql, AiOutlineUserAdd} from 'react-icons/ai'
import {FaPlus} from "react-icons/fa"
import Tickets from '../Components/projectPage/tickets/Tickets'
import Users from '../Components/projectPage/users/Users'
import TicketModal from '../Components/projectPage/tickets/TicketModal'
import UsersModal from '../Components/projectPage/users/UsersModal'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from 'react-bootstrap'

import './projectPage.css'
import '../Components/projectPage/users/user.css'
import { MdGrid3X3 } from 'react-icons/md'

import SimpleBar from 'simplebar-react'

import CreateTicketModal from '../Components/projectPage/tickets/CreateTicketModal'
import axios from 'axios'
import { Redirect, useParams } from 'react-router-dom'
import Cookies from 'js-cookie';

const ProjectPage = ({currentUser}) => {
    const {id} = useParams()
    const [tickets,setTickets] = useState([]);
    const [usersInProject,setUsersInProject] = useState([]);
    const [project,setProject] = useState([]);
    const [users,setUsers] = useState([]);
    const [redirect,setRedirect] =useState(false);

    const [ticketModal,setTicketModal] = useState(false)
    const [ticket,setTicket] = useState([]) 

    const [createTicketModal,setCreateTicketModal] = useState(false)

    const [addUserModal,setAddUserModal] = useState(false)
    const [usersList,setUsersList] = useState([])

    //var Url = "https://webapi20220214131752.azurewebsites.net";
    var Url="https://localhost:44346";

    var headers = {
        'Content-Type': 'application/json',
        'Authorization': "Bearer"+" "+Cookies.get('Jwt')
      }

    useEffect(()=>{

        if(currentUser.projects.includes(id))
        {
            setRedirect(true);
        }

        axios.get(Url+'/api/Project/'+id,{headers:headers})
            .then(res=>{
                setProject({...res.data})
                setUsersInProject([...res.data.users])
                setTickets([...res.data.tickets])
            }).catch(error=> setRedirect(true))
    },[])

    const getTickets =()=>{
       
        axios.get(Url+'/api/Project/'+id,{headers:headers})
        .then(res=>{
            setTickets([...res.data.tickets])
        })
    }

    const updateTickets = (data)=>{
        axios.put(Url+'/api/Ticket',data,{headers:headers})

        .then(res=>getTickets())
            
    }

    useEffect(()=>{
        axios.get(Url+'/api/User',{headers:headers})
            .then(res=>{
                
                [...res.data].map(o=>{
                    let u = [
                        {
                            id:o.id,
                            firstName:o.firstName,
                            lastName:o.lastName
                        }
                    ]
                    setUsers(users=>[...users,...u])
                })      
            })
    },[])


    function updateUsers(selectedUsers){
        let us = [];

        usersInProject.map(x=>{
            let a = {
                userId: x.id
            }

            us.push(a)
        })

        selectedUsers.map(x=>{
            let a = {
                userId: x.id
            }

            us.push(a)
        })

        var data = {
            id: id,
            users: us
        }

        axios.put(Url+"/api/Project/",data,{headers:headers})
            .then(res => {
                setUsersInProject([...usersInProject,...selectedUsers])
            })

        setAddUserModal(!addUserModal)
    
    }

    function addTicket(newTicket){
        axios.post(Url+'/api/Ticket',...newTicket,{headers:headers})
            .then(res=>{
                getTickets();
            }) .catch(error=>console.log(error));
       
        setCreateTicketModal(!createTicketModal)
    }

    const DoneTicket=(ticket)=>{

        var index = tickets.findIndex((o)=>o.id===ticket.id)

        let uTicket = {
            id:tickets[index].id,
            done:!ticket.done
        }

        updateTickets(uTicket)
        setTicketModal(false)
    }

    const DeleteTicket = (ticket)=>{
        var data={
            id:ticket.id
        }

        axios.delete(Url+'/api/Ticket',{data:{id:ticket.id}, headers:headers})
            .then(res=>getTickets())
            .catch(error=>console.log(error));
     
        setTicketModal(!ticketModal)
    }

    function usersOutsideProject(a,b){
        for(var i=0; i < a.length; i++) {
            for(var j=0; j < b.length; j++) {
                if(JSON.stringify(a[i])  == JSON.stringify(b[j])) {
                    a.splice(i, 1);
                }
            }
        }

       return a
    }

    const showTicketModal = (ticket) =>{
        setTicketModal(!ticketModal)
        setTicket(ticket)
    }

    const showAddUserModal = () =>{
        setAddUserModal(!addUserModal)
        setUsersList([])
    }

    const showCreateTicketModal = () =>{
        setCreateTicketModal(!createTicketModal)
    }

    const [userAssigned,setUserAssigned] = useState([])

    const assignUser = (selectedUser) => {
        setUserAssigned(selectedUser)
    }
   
    const ticketRef = useRef()

    useEffect(()=>{
        const handler = (event) => {
            if(!ticketRef.current.contains(event.target)){
                setTicketModal(false)
                setAddUserModal(false)
                setCreateTicketModal(false)
            }
        }

        document.addEventListener("mousedown",handler)

        return () =>{
            document.removeEventListener("mousedown", handler)
        }

    },{
        
    })



    


    if(redirect)
    {
        //return <Redirect to="/"/>
    }
   

    return (
        
        <Container fluid>
            
            <Row style={{marginRight:1}} className='justify-content-xl-center'>
                <Col lg={8} className='mx-xl-3'>
                    <Tickets tickets = {tickets} onClick={showTicketModal} DoneTicket={DoneTicket} />
                </Col>
                <Col lg={3}>
                    <Row>
                        <div className='projectsInfo'>
                            <div className='projectTittle'>{project.name}</div>
                            <div className='projectDescription'>
                                {project.description}
                                </div>
                        </div>
                    </Row>

                    <Row>
                        <div className='usersInProject'>
                        <div className="usersHeader">Assigned</div>
                            <SimpleBar style={{maxHeight:150}} >
                                <Users users = {usersInProject} />
                            </SimpleBar>
                            
                            <div className="addUserToProject"><AiOutlineUserAdd onClick={showAddUserModal} style={{margin:5}} className='addUserBtn' size={80} color='#00ebb8'/></div>
                        </div>
                    </Row>
                
                    <Row>
                        <div className="addTicketToProject">
                            <button onClick={showCreateTicketModal} className="addTicketBtn" >
                                
                                Create new Ticket
                            </button>
                            
                        </div>
                    </Row>
                </Col>
               
                {(ticketModal)&& <div ref={ticketRef} ><TicketModal  ticket={ticket} doneTicket={DoneTicket} DeleteTicket={DeleteTicket} /></div>}
                {(addUserModal)&& <div ref={ticketRef}><UsersModal projectId={id} lista={usersOutsideProject(users,usersInProject)} updateUsers={updateUsers}/></div>}
                {(createTicketModal)&& <div ref={ticketRef}><CreateTicketModal listaUsers={usersInProject} assignUser={assignUser} addTicket={addTicket}/></div>}
            </Row>
               
           
        </Container>
       
    )
}

export default ProjectPage
