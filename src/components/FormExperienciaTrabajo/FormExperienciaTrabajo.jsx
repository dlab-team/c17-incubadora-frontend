import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./FormExperienciaTrabajo.css";

const FormExperienciaTrabajo = () => {
  const [formData, setFormData] = useState({
    urlCV: "",
    urlLinkedIn: "",
    urlGitHub: "",
    urlPortafolio: "",
    proyectoDetalle: "",
    habilidadesBlandas: [],
    experienciaLaboral: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let updatedHabilidadesBlandas = [...formData.habilidadesBlandas];
      if (checked) {
        updatedHabilidadesBlandas.push(value);
      } else {
        updatedHabilidadesBlandas = updatedHabilidadesBlandas.filter((habilidad) => habilidad !== value);
      }
      setFormData({ ...formData, habilidadesBlandas: updatedHabilidadesBlandas });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    } else {
      alert("Por favor, complete todos los campos del formulario.");
    }
  };

  const validateForm = () => {
    return (
      formData.urlCV !== "" &&
      formData.urlLinkedIn !== "" &&
      formData.urlGitHub !== "" &&
      formData.urlPortafolio !== "" &&
      formData.proyectoDetalle !== "" &&
      formData.habilidadesBlandas.length >= 3 &&
      formData.experienciaLaboral !== ""
    );
  };

  const habilidadesBlandas = [
    "Lider",
    "Resiliente/Perseverante",
    "Comunicación/Sociable",
    "Colaborativo/Empatía",
    "Aprendizaje ágil/Autónomo",
    "Flexible/Adaptable",
    "Responsable",
    "Innovador/Curioso",
    "Negociación",
    "Resolución de problemas",
    "Productividad/Iniciativa",
  ];

  const experienciaLaboral = [
    "No poseo experiencia laboral",
    "Entre 0 a 1 año de experiencia laboral",
    "Entre 1 a 2 años de experiencia laboral",
    "Entre 2 a 3 años de experiencia laboral",
    "Más de 4 años de experiencia laboral",
  ];

  return (
    <div className="form-experiencia-trabajo">
      <h1>Experiencia y Trabajo</h1>

      <div className="form-experiencia-trabajo-inputs">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                <strong>URL CV</strong>
                <br />
                Subir como documento público en Google Drive o similar
              </Form.Label>
              <Form.Control type="text" placeholder="url de CV " name="urlCV" value={formData.urlCV} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>URL de LinkedIn</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.linkedin.com/in/tu-usuario/"
                name="urlLinkedIn"
                value={formData.urlLinkedIn}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>URL de GitHub</Form.Label>
              <Form.Control type="text" placeholder="https://github.com/tu-usuario" name="urlGitHub" value={formData.urlGitHub} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>URL de Portafolio/Sitio web</Form.Label>
              <Form.Control type="text" placeholder="url de tu sitio" name="urlPortafolio" value={formData.urlPortafolio} onChange={handleInputChange} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <strong>Explícanos en detalle algún proyecto que te enorgullece</strong>
              <br />
              Describe de que trató, tu rol en el proyecto y por qué lo elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el proyecto,
              tecnologías utilizadas, dificultades y soluciones, funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino explicación)
            </Form.Label>
            <Form.Control as="textarea" rows={3} name="proyectoDetalle" value={formData.proyectoDetalle} onChange={handleInputChange} />
          </Form.Group>

          <div className="form-experiencia-trabajo-section-checkboxes">
            <div className="form-experiencia-trabajo-checkboxes">
              <p>
                <strong> Selecciona 3 habilidades blandas que te representen:</strong>
              </p>
              {habilidadesBlandas.map((habilidad, index) => (
                <Form.Check key={index} type="checkbox" label={habilidad} value={habilidad} onChange={handleInputChange} />
              ))}
            </div>

            <div className="form-experiencia-trabajo-checkboxes-rounded">
              <p>
                <strong>¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?</strong>
              </p>
              {experienciaLaboral.map((experiencia, index) => (
                <Form.Check key={index} name="experienciaLaboral" type="radio" label={experiencia} value={experiencia} onChange={handleInputChange} />
              ))}
            </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default FormExperienciaTrabajo;
