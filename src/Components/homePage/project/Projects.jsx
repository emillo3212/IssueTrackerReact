import {useState} from 'react'
import Project from './Project'
import { Col, Row } from 'react-bootstrap'

const Projects = ({projects,createNewProject}) => {
    return (
        <Row className="projects">
           {projects.map((project)=>(
               <div className='col-4'>
                   <Project key={project.id} project = {project}/>
               </div>))}
           <div onClick={()=>createNewProject()} className='col-4 createProject'>
                Create project
           </div>
        </Row>
    )
}

export default Projects
