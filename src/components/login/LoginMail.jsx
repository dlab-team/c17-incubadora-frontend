import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function LoginMail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validación del correo electrónico con regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Por favor ingresa un correo electrónico válido";
      valid = false;
    }

    // Validación de la contraseña con regex
    if (!password.trim() || password.trim().length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "La contraseña debe contener al menos una letra mayúscula";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // await fetch ("endpoint backend", {method: "post", body: {email,password}})
    } else {
      console.log("error");
    }
  };

  return (
    <Container className="bg-white container-login-mail my-3 d-flex justify-content-center align-items-center">
      <h1 className="pt-5 container-h1">Inicia Sesión con tu Mail</h1>
      <Col xs={12} md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                placeholder="email@example.com"
                className="my-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                className="my-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Button className="login-button" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default LoginMail;
