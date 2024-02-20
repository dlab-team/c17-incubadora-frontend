import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./FormExperienciaTrabajo.css";


const FormExperienciaTrabajo = () => {
    return (
    <div className='form-experiencia-trabajo'>
        
    {/* ABRE TITULO */}    
        <h1>Experiencia y Trabajo</h1>   
    {/* CIERRA TITULO */}  


{/* COMIENZA------------------------------------------> SECTION 1*/}
{/* COMIENZA------------------------------------------> SECTION 1*/}
{/* ABRE SECTION FORM----> INPUTS */}
<div className='form-experiencia-trabajo-inputs'>    
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label><strong>URL CV</strong><br /> 
Subir como documento público en Google Drive o similar</Form.Label>
          <Form.Control type="email" placeholder="url de CV " />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>URL de LinkedIn</Form.Label>
          <Form.Control type="password" placeholder="https://www.linkedin.com/in/tu-usuario/" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>URL de LinkedIn</Form.Label>
          <Form.Control type="email" placeholder="https://github.com/tu-usuario" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>URL de Portafolio/Sitio web</Form.Label>
          <Form.Control type="password" placeholder="url de tu sitio" />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><strong>Explícanos en detalle algún proyecto que te enorgullece</strong><br /> 
            Describe de que trató, tu rol en el proyecto y por qué lo elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el proyecto, tecnologías utilizadas, dificultades y soluciones, funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino explicación)
        </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
</div> 
{/* CIERRA SECTION FORM----> INPUTS */}








{/* COMIENZA------------------------------------------> SECTION 2*/}
{/* COMIENZA------------------------------------------> SECTION 2*/}
<div className='form-experiencia-trabajo-section-checkboxes'>
{/* ABRE SECTION FORM----> CHECKBOX CUADRADOS */}
<div className='form-experiencia-trabajo-checkboxes'>   
<Form>
<p><strong> Selecciona 3 habilidades blandas que te representen:</strong></p>

{['checkbox'].map((type) => (
        
        <div key={`default-${type}`} className="mb-3">
            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Lider`}
            />
            
            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Resiliente/Perseverante`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Comunicación/Sociable`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Colaborativo/Empatía`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Aprendizaje ágil/Autónomo`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Flexible/Adaptable`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Responsable`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Innovador/Curioso`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Negociación`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Resolución de problemas`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Productividad/Iniciativa`}
            />

            </div>
        ))}
</Form>

</div>
{/* CIERRA SECTION FORM----> CHECKBOX CUADRADOS */}



{/* ABRE SECTION FORM ----> CHECKBOX ROUNDED */}
    <div className='form-experiencia-trabajo-checkboxes-rounded'>   
    <Form>
    <p><strong>¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?</strong></p>
        {['radio'].map((type) => (
        
            <div key={`default-${type}`} className="mb-3">

            <Form.Check
                name="group1"
                type={type}
                id={`default-${type}`}
                label={`No poseo experiencia laboral`}
            />

            <Form.Check
                name="group1"
                type={type}
                id={`default-${type}`}
                label={`Entre 0 a 1 año de experiencia laboral`}
            />

            <Form.Check
                name="group1"
                type={type}
                id={`default-${type}`}
                label={`Entre 1 a 2 años de experiencia laboral`}
            />

            <Form.Check
                name="group1"
                type={type}
                id={`default-${type}`}
                label={`Entre 2 a 3 años de experiencia laboral`}
            />

            <Form.Check
                name="group1"
                type={type}
                id={`default-${type}`}
                label={`Más de 4 años de experiencia laboral`}
            />

            </div>
        ))}
        </Form>
    </div>
 {/* CIERRA SECTION FORM----> CHECKBOX ROUNDED */}
</div>


        </div>
    )
}

export default FormExperienciaTrabajo