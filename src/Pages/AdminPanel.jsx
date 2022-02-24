
import React, { useState, useEffect  } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Route, Router, Switch } from 'react-router-dom'
import SideBar from '../Components/adminPanelPage/SideBar'
import Users from '../Components/adminPanelPage/users/Users'
import axios from 'axios'
import Cookies from 'js-cookie'

import './adminPanel.css'
import Projects from '../Components/adminPanelPage/projects/Projects'
import { Redirect } from 'react-router-dom'
const AdminPanel = ({userRole}) => {

  useEffect(()=>{
    if(userRole==="user"){
      window.location.href="/"
    }
  },[])
 
  return ( <Container fluid>
      <Row>
          <SideBar />
        <Col>
          <Route path={"/admin/users"} ><Users/> </Route>
          <Route path={"/admin/projects"} ><Projects/> </Route>
        </Col>
      </Row>
  </Container>
  )
}

export default AdminPanel;