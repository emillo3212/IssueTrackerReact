import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css'

const SideBar = () => {
  return (
    <div className='sideBar'>
       <div className='adminTittle'>Admin Panel</div>
         <Link to={"/admin/users"} style={{textDecoration:'none'}}><div className='sideItem'>Users</div></Link>
        <Link to={"/admin/projects"} style={{textDecoration:'none'}}><div className='sideItem'>Projects</div></Link>
    </div>
  )
}

export default SideBar