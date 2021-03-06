import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './project.css'

const Project = ({project}) => {
    if(project===null){
        window.location.href="/"
    }
    return (
        <Link to={"/project/"+ project.id} style={{textDecoration:'none'}}>
            <div className="project">
                <div className="tittle">{project.name}</div>
                <div className="description"> 
                    {project.description}             
                </div>
                
            </div>
        </Link>
        
    )
}

export default Project
