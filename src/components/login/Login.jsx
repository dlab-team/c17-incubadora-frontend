import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { CiMail } from "react-icons/ci";
import { AiFillGoogleCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


import './login.css'


const Login = () => {
  return (
    <section className='bg_body_login pt-5'>
    <Container xs={12} md={9} className=" bg-white container-login">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6} ><h1 className="pt-5" >Únete a Devsafío</h1></Col>
        </Row>
  
        <Row className="justify-content-md-center">
          <Col xs={12} md={9}><p className="parrafo-login pt-5" >Crea tu cuenta profesional en Devsafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.</p></Col>
        </Row>
  
        <Row className="justify-content-md-center">
          <Col xs={12} className="pt-4">
          
          <Button variant="outline-secondary"><CiMail />  Ingresa con tu mail</Button>
          </Col>
        </Row>
  
        <Row className="justify-content-md-center mx-md-5">
          <Col xs={12} md={3} className="pt-2 text-md-end px-md-0">
          
          <Button className="mx-2 mx-md-0 " variant="outline-secondary"><AiFillGoogleCircle />  Ingresa con Google</Button>
          </Col>
          <Col xs={12} md={3} className="pt-2 text-md-start">
          <Button className="pt-xs-2 mx-md-0 " variant="primary"><CiLinkedin />  Ingresa con LinkedIn</Button>
          </Col>
        </Row>
  
        <Row className="justify-content-md-center mx-md-5">
          <Col xs={12} md={3} className="pt-2 mx-md-0 text-md-end px-md-0">
          <Button className="mx-2 mx-md-0" variant="primary"><FaTwitter />  Ingresa con Twitter</Button>
          </Col>
          <Col xs={12} md={3} className="pt-2 text-md-start">
          <Button className="mx-2 mx-md-0" variant="dark"><IoLogoGithub /> Ingresa con GitHub</Button>
          </Col>
        </Row>
      </Container>
  
    </section>
  )
};

export default Login;