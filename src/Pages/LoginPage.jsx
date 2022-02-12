import React from 'react';
import { useState } from 'react';
import { Container,Row } from 'react-bootstrap';
import './loginPage.css'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie';

const LoginPage = () => {
    const [email,setEmail] = useState("");
    const [pasword,setPassword] =useState("");

    const [redirect,setRedirect]=useState(false)

    
    const login =()=>{
      var data={
         email:email,
         password:pasword
       }
       const headers = {
         'Content-Type': 'application/json'
       }
       axios.post('https://localhost:44346/api/Account/Login',data,{headers:headers,withCredentials: true,})
         .then(res=>{setRedirect(true);Cookies.set('Jwt',res.data)})
         .catch(error=>console.log(error))
   
        
   
     }
     if(redirect){
      window.location.href="/"
     }


  return <div className="login">
      
        <div className='loginTittle'>Login</div>

        <input className='loginInput' type="text" placeholder='Email' 
                onChange={(o)=>setEmail(o.target.value)}/>

        <input className='loginInput' type="text" placeholder='password' 
            onChange={(o)=>setPassword(o.target.value)}/>
    
        <button onClick={login}>login</button>
  </div>;
};

export default LoginPage;
