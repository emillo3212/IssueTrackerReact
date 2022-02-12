import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './project.css'

const Project = ({project}) => {
    return (
        <Link className='col-4' to={"/"+ project.id} style={{textDecoration:'none'}}>
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
