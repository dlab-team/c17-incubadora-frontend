import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./FormTipoTrabajo.css";



const FormTipoTrabajo  = () => {
    return (
    <div className='form-experiencia-trabajo'>
        

        
    {/* ABRE TITULO */}    
    <h1>¿Qué tipo de trabajo buscas?</h1>   
    {/* CIERRA TITULO */}  


    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><strong>Déjanos una breve descripción con respecto tu trabajo ideal</strong></Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>
    </Form>




<div className='form-experiencia-trabajo-section-checkboxes'>

{/* ABRE SECTION FORM----> CHECKBOX CUADRADOS */}
<div className='form-experiencia-trabajo-checkboxes'>   
<Form>
<p><strong> Indícanos tu disponibilidad laboral:</strong></p>

{['checkbox'].map((type) => (
        
        <div key={`default-${type}`} className="mb-3">
            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Full Time`}
            />
            
            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Part Time`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Freelancer`}
            />
            </div>
        ))}
</Form>
</div>
{/* CIERRA SECTION FORM----> CHECKBOX CUADRADOS */}



{/* ABRE SECTION FORM ----> CHECKBOX ROUNDED */}
    <div className='form-experiencia-trabajo-checkboxes-rounded'>   
    <Form>
    <p><strong>¿Qué describe mejor tu situación actual?</strong></p>
        {['radio'].map((type) => (
        
            <div key={`default-${type}`} className="mb-3">

            <Form.Check
                name="group1"
                type={type}
                id={`default-${type}`}
                label={`Quiero trabajo desde mi ciudad actual`}
            />

            <Form.Check
                name="group1"
                type={type}
                id={`default-${type}`}
                label={`Estoy disponible para migrar de mi ciudad dentro de mi país`}
            />

            <Form.Check
                name="group1"
                type={type}
                id={`default-${type}`}
                label={`Estoy disponible para migrar a otro país`}
            />

            </div>
        ))}
        </Form>
    </div>
 {/* CIERRA SECTION FORM----> CHECKBOX ROUNDED */}



{/* ABRE SECTION FORM----> CHECKBOX CUADRADOS */}
<div className='form-experiencia-trabajo-checkboxes'>   
<Form>
<p><strong> Indícanos tu disponibilidad laboral:</strong></p>

{['checkbox'].map((type) => (
        
        <div key={`default-${type}`} className="mb-3">
            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Estados Unidos`}
            />
            
            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Unión Europea`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Mi país de residencia actual`}
            />

            <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Otros países`}
            />
            </div>
        ))}
</Form>
</div>
{/* CIERRA SECTION FORM----> CHECKBOX CUADRADOS */}


</div>



</div>
)
}

export default FormTipoTrabajo;

