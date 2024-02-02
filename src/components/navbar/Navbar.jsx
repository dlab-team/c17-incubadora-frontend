import React from 'react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavBar = () => {


  return (
    <>

<Navbar expand="lg" className="navbar-devsafio mb-5" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Devsafio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
          <Link to="/" className="text-white ms-3 text-decoration-none">Home</Link>
          <Link to="/Profile" className="text-white ms-3 text-decoration-none">Profile</Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

        
    </>
  )
};

export default NavBar;