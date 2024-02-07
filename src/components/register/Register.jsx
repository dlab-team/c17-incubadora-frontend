import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


import './register.css'

const Register = () => {
  return (
  
  <section className='bg_body_register pt-5'>
  <Container className=" bg-white container-start">




      <Row>
        <Col><h1 className="pt-5" >Regístrate</h1></Col>
      </Row>

      

      <Row className="justify-content-md-center pt-5 pt-3">
        <Col className="col-md-auto"  xs={12} ><p className="text-start " >Nombre:</p> 
        </Col>
        <Col xs={12} md={3}> 
         <Form.Control type="text" placeholder="" />
          </Col>

          <Col className="col-md-auto" xs={12}  ><p className="text-start" >Apellido:</p> 
        </Col>
        <Col xs={12} md={3}> 
         <Form.Control type="text" placeholder="" />
          </Col>

      </Row>

      <Row className="justify-content-md-center pt-3">
      <Col className="col-md-auto" xs={12} ><p className="text-start" >Ingresa tu correo:</p> 
        </Col>
        <Col xs={12} md={6}> 
         <Form.Control type="text" placeholder="" />
          </Col>
      </Row>

      <Row className="justify-content-md-center pt-3">
      <Col className="col-md-auto" xs={12} ><p className="text-start" >Crea tu contraseña:</p> 
        </Col>
        <Col xs={12} md={6}> 
         <Form.Control type="text" placeholder="" />
          </Col>

     
      </Row>

      <Row className="justify-content-md-center pt-3">
      <Col className="col-md-auto" xs={12} ><p className="text-start" >Reingresa tu contraseña:</p> 
        </Col>
        <Col xs={12} md={6}> 
         <Form.Control type="text" placeholder="" />
          </Col>

     
      </Row>

   

   
    </Container>

  </section>
)
};

export default Register;
