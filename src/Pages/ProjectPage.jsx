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
import { useParams } from 'react-router-dom'


const ProjectPage = () => {
    const {id} = useParams()
    const [tickets,setTickets] = useState([]);
    const [usersInProject,setUsersInProject] = useState([]);
    const [project,setProject] = useState([]);
    const [users,setUsers] = useState([]);
    
   
    
    useEffect(()=>{
        axios.get('https://localhost:44346/api/Project/'+id)
            .then(res=>{
                setProject({...res.data})
                setUsersInProject([...res.data.users])
                setTickets([...res.data.tickets])
            })
    },[])

    useEffect(()=>{
        axios.get('https://localhost:44346/api/User')
            .then(res=>{
                
                [...res.data].map(o=>{
                    let u = [
                        {
                            id:o.id,
                            firstName:o.firstName
                        }
                    ]
                   //console.log(u)
                    setUsers(users=>[...users,...u])
                })
               

               
                
            })
    },[])

    useEffect(()=>{
      // console.log(users)
    },[users])

    useEffect(()=>{
       //console.log(usersInProject)
        
     },[usersInProject])

   
   
   
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

    const [ticketModal,setTicketModal] = useState(false)
    const [ticket,setTicket] = useState([]) 

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

    const addUsersToList = (dodany) =>{
        setUsersList([...usersList,dodany])
    }

    const updateUsers = () => {
      setUsersInProject([...usersInProject,...usersList])
      setAddUserModal(!addUserModal)
      setUsersList([])
    }

    const deleteUserFromList = (user) =>{
        const list = usersList.filter(item => item.Name !== user )
        setUsersList(list)
    }

    const [createTicketModal,setCreateTicketModal] = useState(false)

    const showCreateTicketModal = () =>{
        setCreateTicketModal(!createTicketModal)
    }

    const [userAssigned,setUserAssigned] = useState([])

    const assignUser = (selectedUser) => {
        setUserAssigned(selectedUser)
    }

    const addTicket = (newTicket) => {
        
        newTicket[0].Id = tickets.length+1;
        setTickets([...tickets,...newTicket])
        setCreateTicketModal(!createTicketModal)
    }
    
    const DoneTicket = (ticket) => {
        var getTickets = [...tickets]
        var done = ticket.Done
        ticket.Done=!done
        
        var index = tickets.find((o)=>o.id===ticket.Id)
        let updateTicket = {...getTickets[index]};
        updateTicket = ticket
        getTickets[index] = updateTicket

        setTickets(getTickets)
        setTicketModal(false)
    }
    const DeleteTicket = (ticket) =>{
        var ticketToDelete = tickets.filter(t=>t.id!==ticket.id)
        setTickets(ticketToDelete)
        setTicketModal(!ticketModal)
    }

    return (
        
        <Container fluid>
            
            <Row style={{marginRight:1}} className='justify-content-xl-center'>
                <Col lg={9} xl={8} className='mx-xl-3'>
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
                {(addUserModal)&& <div ref={ticketRef}><UsersModal projectId={id} lista={usersOutsideProject(users,usersInProject)} addUsersToList={addUsersToList} updateUsers={updateUsers} deleteUserFromList={deleteUserFromList} /></div>}
                {(createTicketModal)&& <div ref={ticketRef}><CreateTicketModal listaUsers={usersInProject} assignUser={assignUser} addTicket={addTicket}/></div>}
            </Row>
               
           
        </Container>
       
    )
}

export default ProjectPage
