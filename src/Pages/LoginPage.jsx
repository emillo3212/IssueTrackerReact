import React from 'react';
import { useState } from 'react';
import { Container,Row } from 'react-bootstrap';
import './loginPage.css'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const LoginPage = () => {
    const [email,setEmail] = useState("");
    const [pasword,setPassword] =useState("");
    const [error,setError] = useState("");
    const [isError,setIsError] = useState(false);

    const [redirect,setRedirect]=useState(false)
  
    const login =()=>{
      var data={
         email:email,
         password:pasword
       }
       const headers = {
         'Content-Type': 'application/json'
       }
       axios.post('https://webapi20220214131752.azurewebsites.net/api/Account/Login',data,{headers:headers,withCredentials: true,})
         .then(res=>{setRedirect(true);Cookies.set('Jwt',res.data,{expires:1});})
         .catch(error=>{setError(error.response.data.Message);setIsError(true)})

     }
     if(redirect){
      window.location.href="/"
     }

     const DemoLogin =()=>{
      var data={
         email:'demo@gmail.com',
         password:'demo123'
       }
       const headers = {
         'Content-Type': 'application/json'
       }
       axios.post('https://webapi20220214131752.azurewebsites.net/api/Account/Login',data,{headers:headers,withCredentials: true,})
         .then(res=>{setRedirect(true);Cookies.set('Jwt',res.data,{expires:1});})
         .catch(error=>{setError(error.response.data.Message);setIsError(true)})

     }
     if(redirect){
      window.location.href="/"
     }


  return <Row className="justify-content-center login">
          {(isError)&&<Row>
            <div className='error'>{error}</div>
          </Row>}
        <Row>
        <div className='loginTittle'>Login</div>

        </Row>
        <Row className="justify-content-center">
          <input className='col-9 loginInput' type="text" placeholder='Email' 
                  onChange={(o)=>setEmail(o.target.value)}/>

        </Row>
        <Row className="justify-content-center">
          <input className='col-9 loginInput' type="password" placeholder='password' 
              onChange={(o)=>setPassword(o.target.value)}/>
        </Row>
        <Row className="justify-content-center">
          <button className='col-8 btn btn-primary login-btn' onClick={login}>login</button>
        </Row>
        <Row>
          <div onClick={()=>DemoLogin()} className='demo'>Demo access to project</div>
        </Row>
        
  </Row>;
};

export default LoginPage;
