import React from 'react'
import './project.css'

const Project = ({project}) => {
    return (
        <div className="project">
            <div className="tittle">{project.name}</div>
            <div className="description"> 
                {project.description}               
            </div>
            <div className="tickets">
                {project.tickets.map(ticket=>
                    (<div className="ticket">{ticket.name}</div>))}
            </div>  
        </div>
    )
}

export default Project
