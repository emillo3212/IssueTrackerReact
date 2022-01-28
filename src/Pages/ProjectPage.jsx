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

const ProjectPage = () => {
    const [tickets,setTickets] = useState([
        {
            id: 1,
            Name: 'Create login page',
            Description: 'Page should contain \n -login \n -password \n -confirm password \n -button to login \n and link to registration page',
            Created:  '21.03.2022   21:20',
            CreatedBy: 'Jorgee Ulani',
            AssignedTo: 'Maks Kolanko',
            Priority: 'low',
            Done: false,
        },
        {
            id: 2,
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
            Id: 1,
            Name:'Wojtek Wojtaszewski',
        },
        {
            Id: 1,
            Name:'Adam Hiller',
        },
    ])

    const ticketRef = useRef()

    useEffect(()=>{
        const handler = (event) => {
            if(!ticketRef.current.contains(event.target)){
                setTicketModal(false)
            }
     }
        document.addEventListener("mousedown",handler)

        return () =>{
            document.removeEventListener("mousedown", handler)
        }

    })
    
    const [ticketModal,setTicketModal] = useState(false)
    const [ticket,setTicket] = useState([]) 

    const showTicketModal = (ticket) =>{
        setTicketModal(!ticketModal)
        setTicket(ticket)
    } 

    const [addUserModal,setAddUserModal] = useState(false)
    const [usersList,setUsersList] = useState([])

    const showAddUserModal = (userslist) =>{
        setAddUserModal(!addUserModal)
        setUsersList(userslist)
    }
   

    return (
        
        <Container fluid>
            
            <Row style={{marginRight:1}} className='justify-content-xl-center'>
                <Col lg={9} xl={8} className='mx-xl-3'>
                    <Tickets tickets = {tickets} onClick={showTicketModal} />
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
                            <Users users = {users} />
                            <div className="addUserToProject"><AiOutlineUserAdd onClick={showAddUserModal} className='addUserBtn' size={80} color='#00ebb8'/></div>
                        </div>
                        
                    </Row>
                    <Row>
                        
                    </Row>
                   
                    <Row>
                        <div className="addTicketToProject">
                            <button className="addTicketBtn">
                                
                                Create new Ticket
                            </button>
                            
                        </div>
                    </Row>
                    
                </Col>

               
                {(ticketModal)&& <div ref={ticketRef} ><TicketModal  ticket={ticket} /></div>}
                {(addUserModal)&& <div><UsersModal/></div>}
            </Row>
                
           
        </Container>
       
    )
}

export default ProjectPage
