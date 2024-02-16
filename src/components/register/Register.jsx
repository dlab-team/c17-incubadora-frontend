import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./register.css";

const Register = () => {
	const [formData, setFormData] = useState({
		nombre: "",
		apellido: "",
		correo: "",
		psw: "",
		confirmPsw: "",
	});

	const [formularioCreado, setFormularioCreado] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validación básica

		if (
			formData.nombre.trim() === "" ||
			formData.apellido.trim() === "" ||
			formData.correo.trim() === "" ||
			formData.psw.trim() === "" ||
			formData.confirmPsw.trim() === ""
		) {
			alert("Todos los campos son obligatorios");
			return;
		}

		if (formData.psw !== formData.confirmPsw) {
			alert("Las contraseñas no coinciden");
			return;
		}

		// Aquí puedes enviar formData al servidor para el registro
		console.log("Datos del formulario:", formData);
		// Lógica para enviar los datos al servidor

		// Limpiar el formulario después del envío
		setFormData({
			nombre: "",
			apellido: "",
			correo: "",
			psw: "",
			confirmPsw: "",
		});

		// Actualizar el estado para indicar que el formulario fue creado correctamente
		setFormularioCreado(true);
	};

	return (
		<section className="bg_body_register ">
			<Container className=" container-start form-container">
				<Row className="justify-content-md-center">
					<Col xs={12} md={6}>
						<h1 className="form-title">
							{formularioCreado
								? "¡Formulario enviado correctamente!"
								: "Regístrate"}
						</h1>
					</Col>
				</Row>

				<Form onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Col xs={12} md={6}>
							<Form.Label className="form-label">
								Nombre:
							</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								name="nombre"
								value={formData.nombre}
								onChange={handleChange}
								className="form-input"
							/>
						</Col>

						<Col xs={12} md={6}>
							<Form.Label className="form-label">
								Apellido:
							</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								name="apellido"
								value={formData.apellido}
								onChange={handleChange}
								className="form-input"
							/>
						</Col>
					</Row>

					<Row className="mb-3">
						<Col xs={12}>
							<Form.Label className="form-label">
								Ingresa tu correo:
							</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								name="correo"
								value={formData.correo}
								onChange={handleChange}
								className="form-input"
							/>
						</Col>
					</Row>

					<Row className="mb-3">
						<Row xs={12} md={6}>
							<Form.Label className="form-label">
								Crea tu contraseña:
							</Form.Label>
							<Form.Control
								type="password"
								placeholder=""
								name="psw"
								value={formData.psw}
								onChange={handleChange}
								className="form-input"
							/>
						</Row>

						<Row xs={12} md={6}>
							<Form.Label className="form-label">
								Reingresa tu contraseña:
							</Form.Label>
							<Form.Control
								type="password"
								placeholder=""
								name="confirmPsw"
								value={formData.confirmPsw}
								onChange={handleChange}
								className="form-input"
							/>
						</Row>
					</Row>

					<Row className="justify-content-md-center">
						<Col xs={12} md={6} className="text-center">
							<Button
								variant="primary"
								type="submit"
								className="form-button"
							>
								Registrarse
							</Button>
						</Col>
					</Row>
				</Form>
			</Container>
		</section>
	);
};

export default Register;
