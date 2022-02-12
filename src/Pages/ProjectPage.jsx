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

    useEffect(()=>{

    if(currentUser.projects.includes(id))
    {
        setRedirect(true);
    }

    var toke = "Bearer"+" "+Cookies.get('Jwt')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': toke
    }

        axios.get('https://localhost:44346/api/Project/'+id,{headers:headers})
            .then(res=>{
                setProject({...res.data})
                setUsersInProject([...res.data.users])
                setTickets([...res.data.tickets])
                console.log([res.data.tickets])
            }).catch(error=> setRedirect(true))
            console.log(currentUser.projects)
    },[])

    const getTickets =()=>{
        var toke = "Bearer"+" "+Cookies.get('Jwt')
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': toke
        }
        axios.get('https://localhost:44346/api/Project/'+id,{headers:headers})
        .then(res=>{
            setTickets([...res.data.tickets])
        })
    }

    const updateTickets = (data)=>{
        var toke = "Bearer"+" "+Cookies.get('Jwt')
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': toke,
          'Access-Control-Allow-Origin':'*'
        }
        axios.put('https://localhost:44346/api/Ticket',data,{headers:headers})

        .then(res=>getTickets())
            
    }

    useEffect(()=>{
        var toke = "Bearer"+" "+Cookies.get('Jwt')
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': toke
        }

        axios.get('https://localhost:44346/api/User',{headers:headers})
            .then(res=>{
                
                [...res.data].map(o=>{
                    let u = [
                        {
                            id:o.id,
                            firstName:o.firstName,
                            lastName:o.lastName
                        }
                    ]
                   //console.log(u)
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
        var toke = "Bearer"+" "+Cookies.get('Jwt')
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': toke
        }


        axios.put("https://localhost:44346/api/Project/",data,{headers:headers})
            .then(res => {
                console.log(res.data);
                setUsersInProject([...usersInProject,...selectedUsers])
            .catch(error => console.log(error))
            })

        setAddUserModal(!addUserModal)
    
    }

    function addTicket(newTicket){
        var toke = "Bearer"+" "+Cookies.get('Jwt')
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': toke
        }

        axios.post('https://localhost:44346/api/Ticket',...newTicket,{headers:headers})
            .then(res=>{
                console.log(res.data);
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
        console.log(ticket.id)
        var data={
            id:ticket.id
        }
        var toke = "Bearer"+" "+Cookies.get('Jwt')
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': toke
        }

        axios.delete('https://localhost:44346/api/Ticket',{data:{id:ticket.id}, headers:headers})
            .then(res=>getTickets())
            .catch(error=>console.log(error));
     
        setTicketModal(!ticketModal)
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

    const [addUserModal,setAddUserModal] = useState(false)
    const [usersList,setUsersList] = useState([])

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

    
   
   
    if(redirect)
    {
        return <Redirect to="/"/>
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
