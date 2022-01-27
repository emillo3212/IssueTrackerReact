import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'

const Project = ({project}) => {
    return (
        <Link to={"/"+ project.name}>
        <div className="project">
            <div className="tittle">{project.name}</div>
            <div className="description"> 
                {project.description}               
            </div>
            <div className="ticketss">
                {project.tickets.map(ticket=>
                    (<div className="tickett">{ticket.name}</div>))}
            </div>  
        </div>
        </Link>
        
    )
}

export default Project
