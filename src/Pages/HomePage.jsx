import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Projects from '../Components/homePage/project/Projects';
import Cookies from 'js-cookie';

import './homePage.css';
import CreateProjectModal from '../Components/homePage/CreateProjectModal';

const HomePage = ({currentUser}) => {
  const [projects, setProjects] = useState([]);
  const [createProjectModal,setCreateProjectModal] = useState(false);
  const [users,setUsers]=useState([]);
  const [error,setError] = useState("");
  const [isError,setIsError] = useState(false);
  //var Url = "https://webapi20220214131752.azurewebsites.net";
  var Url="https://localhost:44346";

  var headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer"+" "+Cookies.get('Jwt')
  }

  useEffect(()=>{

    axios.get(Url+'/api/User',{headers:headers})
        .then(res=>{
            
            [...res.data].map(o=>{
                let u = [
                    {
                        id:o.id,
                        firstName:o.firstName,
                        lastName:o.lastName
                    }
                ]
                setUsers(users=>[...users,...u])
            })      
        })
},[])

  useEffect(()=>{
    var proje =currentUser.projects
    
    const fetchProjects = (id)=>{
      axios.get(Url+'/api/Project/'+id,{headers:headers,withCredentials:true})
        .then(res=>setProjects(projects=>[...projects,res.data]))
      
    }
    
    proje.forEach(e=>{
      fetchProjects(e.id);
    })
    
  },[]) 

  const createNewProject = () =>{
    setCreateProjectModal(!createProjectModal);
  }

  const AddNewProject = (newProject) =>{
    var toke = "Bearer"+" "+Cookies.get('Jwt')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': toke
    }

    axios.post(Url+'/api/Project',newProject,{headers:headers})
        .then(res=>{
            window.location.href="/";
        }) .catch(error=>setError(error.response.data.Message));

      
  }

  const projectRef = useRef()

    useEffect(()=>{
        const handler = (event) => {
            if(!projectRef.current.contains(event.target)){
              setCreateProjectModal(false);
            }
        }

        document.addEventListener("mousedown",handler)

        return () =>{
            document.removeEventListener("mousedown", handler)
        }

    },{
        
    })

  return <Container>
    <Projects createNewProject={createNewProject} projects={projects} />
    {(createProjectModal)&&<div ref={projectRef}><CreateProjectModal users={users} AddNewProject={AddNewProject} currentUser={currentUser} error={error}/></div>}
  </Container>

 
};

export default HomePage;
