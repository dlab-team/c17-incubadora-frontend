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
import { LuContact } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";



import './profiles.css'

function Profiles() {
  return (

    <Container fluid="md"  className=" bg-white ">
      

<Row md={3} className="justify-content-md-left flex">

<Col xs={12} md={2} className="bg-menu-profile"  >
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
  <Col xs={6} md={5}>
 <p className="text-sube-cv text-start " > <LuFileInput  className='mx-3'  size={'24px'} />  Sube tu CV</p>
  </Col>

  <Col xs={3} md={5}>
 <p className="text-ejemplocv text-md-end" >  ejemploCV.pdf</p> 
  </Col>

  <Col xs={3} md={2} className="text-md-end"  >
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
<Col xs={4} md={3} className="text-lg-start "  >
<Avatar
    name="John Doe"
    size="100"
    round={true}
    src="https://example.com/avatar.jpg"
    color='#2738f5'
  />

</Col>

<Col xs={5} md={7}>
 <p className="text-name_apellido text-start " > Nombre Apellido</p> 
 <p className="text-pais  text-start " > País</p> 
  </Col>

  <Col xs={3} md={2} className="text-md-end "  >
  <a href="" target="_blank"><FiEdit2 style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>
</Row>
{/* FIN SECCION NOMBRE APELLIDO */}




{/* START SECCION INFO CORREO Y RRSS */}
<Row  md={12} className="justify-content-md-center pb-md-4">

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


<Col xs={9} md={5}>
 <p className="text-experiencia text-md-end" > 1 a 3 años de experiencia</p> 
 <p className="text-email text-md-end" > Nivel de Inglés avanzado</p> 
  </Col>

  <Col xs={3} md={2} className=" text-md-end "  >
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


<Col xs={9} md={5}>
 <p className="text-experiencia text-md-end" > Full Time</p> 
 <p className="text-email text-md-end" > Disponibilidad inmediata</p> 
  </Col>

  <Col xs={3} md={2} className=" text-md-end "  >
  <a href="" target="_blank"><FiEdit2 style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>

</Row>

{/* FIN DISPONIBILIDAD */}

<hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#817E7E'
}}/>

{/* START ROL Y SALARIO ACTUAL */}
<Row md={12} className="justify-content-md-center pt-4 pb-md-4">

<Col xs={12} md={5} className="text-lg-start"  >
<p className="text-sube-cv  text-start " > <LuContact  className='mx-3 '  size={'24px'} />  Rol y salario actual</p>
</Col>


<Col xs={9} md={5}>
 <p className="text-experiencia text-md-end" > Fullstack</p> 
 <p className="text-email text-md-end" > Salario actual 1.000.000 CLP</p> 
  </Col>

  <Col xs={3} md={2} className=" text-md-end "  >
  <a href="" target="_blank"><FiEdit2 style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>

</Row>

{/* FIN ROL Y SALARIO ACTUAL */}

<hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#817E7E'
}}/>

{/* START HABILIDADES */}
<Row md={12} className="justify-content-md-center pt-4 pb-md-4">

<Col xs={9} md={10} className="text-lg-start pb-4"  >
<p className="text-habilidades  text-start mx-3  " >  Habilidades</p>
</Col>

<Col xs={3} md={2} className=" text-md-end "  >
  <a href="" target="_blank"><FiEdit2 style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>



  <Row md={12} className="justify-content-md-left pb-3">
  <Col xs={6} md={2}className="jus" >
 <p className="text-sube-cv text-md-start mx-1 " > Avanzado</p> 

  </Col>
  <Col xs={3} md={2} className=" text-md-start mx-5 "  >
  <span class="badge border border-primary font-badge">HTML</span>
  </Col>
  </Row>

  <Row md={12} className="justify-content-md-left pb-3">
  <Col xs={6} md={2}className="jus" >
 <p className="text-sube-cv text-md-start mx-1 " > Experimentado</p> 

  </Col>
  <Col xs={3} md={4} className=" text-md-start mx-4 "  >
  <span class="badge border border-primary font-badge mx-4 ">CSS</span>
  <span class="badge border border-primary font-badge">JavaScript</span>
  </Col>
  </Row>


  <Row md={12} className="justify-content-md-left pb-3">
  <Col xs={6} md={2}className="jus" >
 <p className="text-sube-cv text-md-start mx-1 " > Principiante</p> 

  </Col>
  <Col xs={3} md={2} className=" text-md-start mx-5 "  >
  <span class="badge border border-primary font-badge">Angular</span>
  </Col>
  </Row>


</Row>

{/* FIN HABILIDADES */}


<hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#817E7E'
}}/>

{/* START EDUCACION */}
<Row md={12} className="justify-content-md-left pt-4 pb-md-5">


<Col xs={12} md={12} className="text-lg-start pb-3"  >
<p className="text-habilidades  text-start mx-3  " >  Educación</p>
</Col>


<Col xs={6} md={12}>
 <p className="text-edu-fech text-lg-start mx-3" > Mar 2021 - Mar 2022</p> 
 </Col>

 <Col xs={8} md={6}>
 <p className="text-habilidades  text-start mx-3  " >  Desafío Latam</p>
 </Col>

  <Col xs={4} md={6} className=" text-md-end "  >
  <a href="" target="_blank"><FiEdit2 className=" mx-4 " style={{ color: "#232323"}} size={'24px'} /></a> 
  <a href="" target="_blank"><FaRegTrashAlt style={{ color: "#232323"}} size={'24px'} /></a> 
  </Col>

  <Col xs={6} md={12}>
 <p className="text-edu-fech text-start mx-3" > Full Stack Developer</p> 
 </Col>

</Row>

{/* FIN  EDUCACION*/}







  </Col>

  </Row>


  
  </Container>




  )
};

export default Profiles;