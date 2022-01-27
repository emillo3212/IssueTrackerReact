import React, { useState,useEffect,useRef } from 'react'
import './projectPage.css'
import {FaPlus} from "react-icons/fa"
import Tickets from '../Components/projectPageComponents/tickets/Tickets'
import Users from '../Components/projectPageComponents/users/Users'
import TicketModal from '../Components/projectPageComponents/tickets/TicketModal'
import UsersModal from '../Components/projectPageComponents/users/UsersModal'

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

        <div className="content"> 
            <Tickets tickets = {tickets} onClick={showTicketModal} />

            <Users users = {users} onClick = {showAddUserModal}/>

            <div className="addTicketToProject">
                <button className="addTicketBtn">
                    <FaPlus size={85}/>
                    <span className='tooltiptext'>Create new Ticket</span>
                </button>
                
            </div>
            {(ticketModal)&& <div ref={ticketRef} ><TicketModal  ticket={ticket} /></div>}
            {(addUserModal)&& <div><UsersModal/></div>}
        </div>
    )
}

export default ProjectPage
