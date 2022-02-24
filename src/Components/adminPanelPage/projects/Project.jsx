import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../homePage/project/project.css'

import {AiFillCloseCircle} from 'react-icons/ai'

const Project = ({project,deleteProject}) => {
    if(project===null){
        window.location.href="/"
    }
    return (
    <Row className="AP-project" >
        <Col md={9}>
            <Link  to={"/project/"+ project.id} style={{textDecoration:'none',color:'white'}}>
                <div className="AP-tittle">{project.name}</div> 
            </Link>
        </Col>
       
        <Col>
            <AiFillCloseCircle onClick={()=>deleteProject(project)} className='AP-deleteProject' size={50} ></AiFillCloseCircle>
        </Col>
       

    </Row>
        
       
    
       
        
    )
}

export default Project
