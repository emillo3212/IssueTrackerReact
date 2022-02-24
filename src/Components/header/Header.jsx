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
        <Nav className="navbar sticky-top navbar-dark topBar mb-4">
            <Link to={"/"} className="logo">IssueTracker</Link>

            {(Object.keys(currentUser).length!==0)&&<> <div className='currentUser'>
                <FaUser size={40} /> <div className='userDropdown'>
                            <div className='nav-user'>{currentUser.firstName} {currentUser.lastName}</div>
                            {(currentUser.role.name==="admin"||currentUser.role.name==="demo")&&<Link to={"/admin/users"} className='nav-admin'>Admin Panel</Link>}

                            <div onClick={()=>logout()} className='logout'>logout</div>
                            
                    </div>
               
            </div> </>}
            
        </Nav>
    )
}

export default Header
