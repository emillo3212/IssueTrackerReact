import {useState} from 'react'
import Project from './Project'
import {BrowserRouter as Link} from 'react-router-dom'

const Projects = ({projects}) => {
    return (
        <div className="projects">
           {projects.map((project)=>(
                <Project key={project.id} project = {project}/>
           ))}
        </div>
    )
}

export default Projects
