import {useState} from 'react'
import Project from './Project'

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
