import {useState} from 'react'
import Project from './Project'
import { Col, Row } from 'react-bootstrap'

const Projects = ({projects}) => {
    return (<>
        
           {projects.map((project)=>(
               <div className='col-4' >
                   <Project key={project.id} project = {project}/>
               </div>))}
          
               </>
    )
}

export default Projects
