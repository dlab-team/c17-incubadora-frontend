import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LuFileInput } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";
import Avatar from 'react-avatar';
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { ImLinkedin } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { LuBookOpenCheck } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";


import './profiles.css'

function Profiles() {
  return (

    <Container fluid="md"  className=" bg-white ">

<Row md={3} className="justify-content-md-left flex">

<Col xs={12} md={3} className="bg-menu-profile"  >
    <Nav defaultActiveKey="/home" className="flex-column align-content-md-start" style={{ width: window === false ? 250 : 60 }}>
    <Nav.Link href="/home">Active</Nav.Link>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav>
  </Col>
  

  <Col xs={12} md={9}>

  <Col xs={12} md={12}>
  <h1 className="text-bienvenido pt-5 pb-4 text-start " >¡Bienvenido!</h1>
  </Col>

  {/* START SECCION SUBE TU CV */}
  <Row md={3} className="justify-content-md-center pt-5 pb-md-4 ">
  <Col xs={12} md={5}>
 <p className="text-sube-cv text-start " > <LuFileInput  className='mx-3'  size={'24px'} />  Sube tu CV</p>
  </Col>

  <Col xs={12} md={5}>
 <p className="text-ejemplocv text-md-end" >  ejemploCV.pdf</p> 
  </Col>

  <Col xs={12} md={2} className="text-md-end"  >
  <a href="" target="_blank"><FiEdit2 style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>

  </Row>
{/* FIN SECCION SUBE TU CV */}


  <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#817E7E'
}}/>

{/* START SECCION NOMBRE APELLIDO */}
<Row md={12} className="justify-content-md-center pt-5 pb-md-5 ">
<Col sm={12} md={3} className="text-lg-start "  >
<Avatar
    name="John Doe"
    size="100"
    round={true}
    src="https://example.com/avatar.jpg"
    color='#2738f5'
  />

</Col>

<Col xs={12} md={7}>
 <p className="text-name_apellido text-start " > Nombre Apellido</p> 
 <p className="text-pais  text-start " > País</p> 
  </Col>

  <Col xs={12} md={2} className="text-md-end "  >
  <a href="" target="_blank"><FiEdit2 style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>
</Row>
{/* FIN SECCION NOMBRE APELLIDO */}




{/* START SECCION INFO CORREO Y RRSS */}
<Row md={12} className="justify-content-md-center pb-md-4">

<Col xs={12} md={4} className="text-lg-start"  >
<p className="text-email  text-start " > <MdOutlineEmail  className='mx-3 '  size={'24px'} />  ejemplo@correo.com</p>
</Col>

<Col xs={12} md={3}>
 <p className="text-email text-start " > <LuPhone  className='mx-3'  size={'24px'} />  56987654321</p>

  </Col>

  <Col xs={12} md={5} className=" text-md-start d-flex"  >
  <a href="" target="_blank"><ImLinkedin className='mx-5' style={{ color: "#232323"}} size={'32px'} /></a> 
  <a href="" target="_blank"><SiGithub style={{ color: "#232323"}} size={'32px'} /></a> 
  </Col>
</Row>

{/* FIN SECCION INFO CORREO Y RRSS */}



<hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#817E7E'
}}/>


{/* START EXPERIENCIAA LABORAL */}
<Row md={12} className="justify-content-md-center pt-4 pb-md-4">

<Col xs={12} md={5} className="text-lg-start"  >
<p className="text-sube-cv  text-start " > <LuBookOpenCheck  className='mx-3 '  size={'24px'} />  Experiencia Laboral</p>
</Col>


<Col xs={12} md={5}>
 <p className="text-experiencia text-md-end" > 1 a 3 años de experiencia</p> 
 <p className="text-email text-md-end" > Nivel de Inglés avanzado</p> 
  </Col>

  <Col xs={12} md={2} className=" text-md-end "  >
  <a href="" target="_blank"><FiEdit2 style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>

</Row>

{/* FIN EXPERIENCIAA LABORAL */}

<hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#817E7E'
}}/>


{/* START DISPONIBILIDAD */}
<Row md={12} className="justify-content-md-center pt-4 pb-md-4">

<Col xs={12} md={5} className="text-lg-start"  >
<p className="text-sube-cv  text-start " > <LuCalendarCheck  className='mx-3 '  size={'24px'} />  Disponibilidad</p>
</Col>


<Col xs={12} md={5}>
 <p className="text-experiencia text-md-end" > Full Time</p> 
 <p className="text-email text-md-end" > Disponibilidad inmediata</p> 
  </Col>

  <Col xs={12} md={2} className=" text-md-end "  >
  <a href="" target="_blank"><FiEdit2 style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>

</Row>

{/* FIN DISPONIBILIDAD */}



  </Col>

  </Row>


  
  </Container>




  )
};

export default Profiles;