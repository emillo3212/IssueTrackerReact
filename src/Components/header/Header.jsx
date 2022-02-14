import axios from 'axios'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.css'
import Cookies from 'js-cookie';
import { FaUser } from 'react-icons/fa'

const Header =({currentUser})=> {
    const logout =()=>{
        Cookies.remove("Jwt");
        window.location.href="/";
    }

    return (
        <Nav className="navbar navbar-dark topBar mb-4">
            <Link to={"/"} className="logo">IssueTracker</Link>
            {(Object.keys(currentUser).length!==0)&&<> <div  className='currentUser'><FaUser size={40} />{currentUser.firstName} {currentUser.lastName}<div onClick={()=>logout()} className='logout'>logout</div></div> </>}
            
        </Nav>
    )
}

export default Header
