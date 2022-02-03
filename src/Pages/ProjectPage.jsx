import React, { useState,useEffect,useRef } from 'react'

import {AiOutlineUserAdd} from 'react-icons/ai'
import {FaPlus} from "react-icons/fa"
import Tickets from '../Components/projectPageComponents/tickets/Tickets'
import Users from '../Components/projectPageComponents/users/Users'
import TicketModal from '../Components/projectPageComponents/tickets/TicketModal'
import UsersModal from '../Components/projectPageComponents/users/UsersModal'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from 'react-bootstrap'

import './projectPage.css'
import '../Components/projectPageComponents/users/user.css'
import { MdGrid3X3 } from 'react-icons/md'

import SimpleBar from 'simplebar-react'
import CreateTicketModal from '../Components/projectPageComponents/tickets/CreateTicketModal'

const ProjectPage = () => {
    const [tickets,setTickets] = useState([
        {
            Id: 1,
            Name: 'Create login page',
            Description: 'Page should contain \n -login \n -password \n -confirm password \n -button to login \n and link to registration page',
            Created:  '21.03.2022   21:20',
            CreatedBy: 'Jorgee Ulani',
            AssignedTo: 'Maks Kolanko',
            Priority: 'Low',
            Done: false,
        },
        {
            Id: 2,
            Name: 'Design homePage',
            Description: 'ask Thomas about more details',
            Created: '22.03.2022    13:42',
            CreatedBy: 'Joe Biden',
            AssignedTo: 'Vladimir Putin',
            Priority: 'Medium',
            Done: true,
        },
    ]
    );

    const [users, setUsers] = useState([
        {
            Id: 1,
            Name:'Piotr Sowa',
        },
        {
            Id: 2,
            Name:'Adam Małysz',
        },
        {
            Id: 3,
            Name:'Wojtek Wojtaszewski',
        },
        {
            Id: 4,
            Name:'Adam Hiller',
        },
    ])

    const [lista,setLista] = useState([
        {
          Id:1,
          Name:'Stefan Stefanowski',
        },
        {
          Id:2,
          Name:'Alan Alanowski',
        },
        {
          Id:3,
          Name:'Kamil Kamilowski',
        },
        {
          Id:4,
          Name:'Adrian Adrianowski',
        },
        {
          Id:5,
          Name:'Mikołaj Mikołajewski',
        },
        {
          Id:6,
          Name:'Wojtek Wojtyła',
        },
        {
          Id:7,
          Name:'Paweł Pawłowski',
        },
        {
          Id:8,
          Name:'Monika Monikowska',
        },
        {
          Id:9,
          Name:'Krzystof Krzystowski',
        },
    
      ]);

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
        console.log(users)
    }

    const updateUsers = () => {
      setUsers([...users,...usersList])
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
        console.log(newTicket.Id)
        console.log(tickets)
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
        var ticketToDelete = tickets.filter(t=>t.Id!==ticket.Id)
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
                            <div className='projectTittle'>Project number 1</div>
                            <div className='projectDescription'>
                                Bardzo super project który jest the best mowie ci
                                Bardzo super project który jest the best mowie ci
                                Bardzo super project który jest the best mowie ci
                                Bardzo super project który jest the best mowie ci
                                </div>
                        </div>
                    </Row>

                    <Row>
                        <div className='usersInProject'>
                        <div className="usersHeader">Assigned</div>
                            <SimpleBar style={{maxHeight:150}} >
                                <Users users = {users} />
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
                {(addUserModal)&& <div ref={ticketRef}><UsersModal lista={lista} addUsersToList={addUsersToList} updateUsers={updateUsers} deleteUserFromList={deleteUserFromList} /></div>}
                {(createTicketModal)&& <div ref={ticketRef}><CreateTicketModal listaUsers={users} assignUser={assignUser} addTicket={addTicket}/></div>}
            </Row>
               
           
        </Container>
       
    )
}

export default ProjectPage
