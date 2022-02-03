import {useState} from 'react'
import Project from './Project'
import {BrowserRouter as Link} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const Projects = ({projects}) => {
    return (
        <Row className="projects">
           {projects.map((project)=>(
                <Project key={project.id} project = {project}/>
           ))}
        </Row>
    )
}

export default Projects
