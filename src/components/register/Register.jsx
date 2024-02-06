import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { CiMail } from "react-icons/ci";
import { AiFillGoogleCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


import './register.css'

const Register = () => {
  return (
  
  <section className='bg_body_register pt-5'>
  <Container className=" bg-white container-start">
      <Row>
        <Col><h1 className="pt-5" >Únete a Devsafío</h1></Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col className="col-9"><p className="parrafo-register pt-5" >Crea tu cuenta profesional en Devsafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.</p></Col>
      </Row>

      <Row>
        <Col className="pt-4">
        
        <Button variant="outline-secondary"><CiMail />  Ingresa con tu mail</Button>
        </Col>
      </Row>

      <Row>
        <Col className="pt-2">
        
        <Button className="mx-2" variant="outline-secondary"><AiFillGoogleCircle />  Ingresa con Google</Button>
        <Button variant="primary"><CiLinkedin />  Ingresa con LinkedIn</Button>
        </Col>
      </Row>

      <Row>
        <Col className="pt-2">
        <Button className="mx-2" variant="primary"><FaTwitter />  Ingresa con Twitter</Button>
        <Button variant="dark"><IoLogoGithub />  Ingresa con GitHub</Button>
        </Col>
      </Row>
    </Container>

  </section>
)
};

export default Register;
