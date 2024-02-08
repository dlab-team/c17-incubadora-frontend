import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-devsafio" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo-nav" alt="Logo" src="DEV-IMAGOTIPO-WHITE-HORIZONTAL.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/login" className="text-white m-3 text-decoration-none fw-normal">
              Inicia Sesión
            </Link>
            <Link to="/profile" className="text-white m-3 text-decoration-none fw-normal">
              Administra la Página
            </Link>
            <div>
              <Link to="/registrate">
                <button className="nav-button mx-3">Regístrate</button>
              </Link>
              <Link to="/contactanos">
                <button className="nav-button2 mx-3">Contáctanos</button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
