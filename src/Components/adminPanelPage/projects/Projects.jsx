import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Project from './Project';
import SimpleBar from 'simplebar-react';


const Projects = () => {

  const [projects,setProjects] = useState([]);
  const [sure,setSure] = useState(false);
  const [project,setProject] = useState({});

  const [message,setMessage]= useState("");
  const [isError,setIsError]= useState(false);

  var Url = "https://webapi20220214131752.azurewebsites.net";
  //var Url="https://localhost:44346";

  var headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer"+" "+Cookies.get('Jwt')
  }
 const getProjects = () =>{
    axios.get(Url+"/api/Project",{headers:headers})
      .then(res=>setProjects(res.data))
      .catch(error=> console.log(error))
 }

  useEffect(()=>{
    getProjects();
  },[])

  const deleteProject = (ProjectToDelete) =>{
    
    setProject(ProjectToDelete);
    setSure(!sure);
  }

  const noDelete = ()=>{
    setSure(false);
  }

  const yesDelete = () =>{
    var data ={
        id:project.id
    }
    axios.delete(Url+"/api/Project",{data:{id:data.id},headers:headers}).then(res=>getProjects())
    .catch(error=>{setMessage(error.response.data.Message);setIsError(true)})
    setSure(false);
    
  }

  return (
    <div style={{paddingLeft:290}}>
        <Row className='justify-content-center' >

          <Col md={7} xl={3} className="AP-projects">
            <Col>Projects</Col>
            <SimpleBar style={{maxHeight:650,padding:20}}  >
            {projects.map((project)=>(
              <Row>
                  <Project project={project} deleteProject={deleteProject}/>
              </Row>
              
            ))}
            </SimpleBar>
          </Col>
          
          
        </Row>
      
              {sure&&<div className='warming'>
                    <div>Delete  {project.name} Project?</div>
                    <button onClick={()=>yesDelete()}className='AP-yesBtn'>Yes</button>
                    <button onClick={()=>noDelete()} className='AP-noBtn'>No</button>
                </div>}
                {isError&&<div className='warming'> {message} <br/>
                  <button onClick={()=>setIsError(false)}>ok</button>
                </div>}
      </div>
  )
}

export default Projects