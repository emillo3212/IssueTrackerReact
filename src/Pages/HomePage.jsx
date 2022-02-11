import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Projects from '../Components/project/Projects';
import Cookies from 'js-cookie';

const HomePage = ({currentUser}) => {
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    var proje =currentUser.projects
    
    var toke = "Bearer"+" "+Cookies.get('Jwt')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': toke
    }
    const fetchProjects = (id)=>{
      axios.get('https://localhost:44346/api/Project/'+id,{headers:headers,withCredentials:true})
        .then(res=>setProjects(projects=>[...projects,res.data]))
      
    }

    
    proje.forEach(e=>{
      fetchProjects(e.id);
    })
    
    

  },[]) 

  return <Container>
      <Projects projects={projects} />
  </Container>
};

export default HomePage;
