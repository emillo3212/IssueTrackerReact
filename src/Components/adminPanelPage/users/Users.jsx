import React from 'react'
import { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import User from './user.jsx'
import './users.css'
import Cookies from 'js-cookie'
import axios from 'axios'
import SimpleBar from 'simplebar-react';

const Users = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [isSuccess,setIsSuccess] = useState(false)

  const [error,setError] = useState("");
  const [isError,setIsError] = useState(false);

  const [users,setUsers] = useState([]);


  var Url="https://localhost:44346";
  var headers = {
      'Content-Type': 'application/json',
      'Authorization': "Bearer"+" "+Cookies.get('Jwt')
    }

  useEffect(()=>{
    getUsers();
  },[])
  
  const getUsers =()=>{
    axios.get(Url+'/api/User',{headers:headers})
    .then(res=>{
      setUsers([]);
        [...res.data].map(o=>{
            let u = [
                {
                    id:o.id,
                    firstName:o.firstName,
                    lastName:o.lastName,
                    role:o.role.name,
                    email:o.email
                }
            ]
            setUsers(users=>[...users,...u])
        })      
    })  
  }


  const CreateUser = () =>{
    var data ={
      firstName:firstName,
      lastName:lastName,
      email:email
    }
    axios.post(Url+'/api/Account/Register',data,{headers:headers})
    .then(res=>{success();
    }).catch(error=>{
      setError(error.response.data.Message);
      setIsError(true);
      setIsSuccess(false);
    });
  }

  const success = () =>{
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsSuccess(true)
    setIsError(false);
    getUsers();
  }

  return (<div style={{paddingLeft:330}}>
    <Row>

      <Col md={6}  className='AP-users'>
        <Row className='justify-content-center'>
              <Col className="AP-usrsHeader">Users</Col>
      
              <SimpleBar style={{maxHeight:620}}>
                {users.map((user)=>(
                    <User key={user.id} user={user} />
                ))}
              </SimpleBar>
             
        </Row>
      </Col>

      <Col md={4} xl={3} className='AP-createUser mx-5 p-4'>
        <Row className='justify-content-center'>
            {(isError)&&<Row>
                <div className='error'>{error}</div>
              </Row>}
            <div  className="AP-usrsHeader">Create new user</div>
          <Col md={12}>
            <div className='AP-inputHeader'>First name</div>
            <input type='text' className='AP-createUserInput p-2'
                    onChange={(e)=>{
                      setFirstName(e.target.value);
                    }}
                    value={firstName}/>
          </Col>
          <Col md={12}>
            <div className='AP-inputHeader'>Last name</div>
            <input type='text' className='AP-createUserInput p-2'
                    onChange={(e)=>{
                      setLastName(e.target.value);
                    }}/>
          </Col>
          <Col md={12}>
            <div className='AP-inputHeader'>Email</div>
            <input type='text' className='AP-createUserInput p-2'
                    onChange={(e)=>{
                      setEmail(e.target.value);
                    }}/>
          </Col>
          <Col md={9}>
            <button onClick={()=>CreateUser()} className='AP-createUser-Btn my-5'>Create user</button>
          </Col>
          <Row>
            {(isSuccess)&& <div className='AP-message'>
                User successfuly created
            </div>}
          </Row>
                
        </Row>
                
      </Col>

    </Row>

   
  </div>
  
  )
}

export default Users