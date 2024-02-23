import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { LuHome } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";

import "./MenuProfile.css";



function MenuProfile() {
  return (

    <>

<Col xs={12} md={3} className="pt-md-5" >
<div class="bg-menu-profile">
        <div class="logo">
        <a href="#" class="btn">
        <FiBriefcase size={"24px"}  className='icon-job' />
        <span class="text-job"> Job ready</span>
       
    </a>
        </div>
        <a href="#" class="menu-item">
            <LuHome size={"24px"} className="menu-icon" />
             <span className='text-menu' >Home</span> 
        </a>
        <a href="#" class="menu-item">
            <FiUserCheck size={"24px"}  className="menu-icon" />
              <span className='text-menu' >Perfil</span> 
        </a>
        <a href="#" class="menu-item">
            <FaRegFileAlt size={"24px"}  className="menu-icon" />
            <span className='text-menu' > Tests técnicos</span> 
        </a>
    </div>

          
        </Col>

  
  </>




  )
};

export default MenuProfile;