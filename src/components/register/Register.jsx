import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./register.css";
import devsafioApi from "../../devsafioApi";

const Register = () => {
	const [data, setData] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		last_name: "",
		email: "",
		password: "",
		confirmPassword: "",
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
			formData.name.trim() === "" ||
			formData.last_name.trim() === "" ||
			formData.email.trim() === "" ||
			formData.password.trim() === "" ||
			formData.confirmPassword.trim() === ""
		) {
			alert("Todos los campos son obligatorios");
			return;
		}

		if (formData.password !== formData.confirmPassword) {
			alert("Las contraseñas no coinciden");
			return;
		}

		// Aquí puedes enviar formData al servidor para el registro
		console.log("Datos del formulario:", formData);
		// Lógica para enviar los datos al servidor

		const fetchData = async () => {
			try {
				const response = await devsafioApi.post("/users/", formData);

				console.log(response);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		};

		fetchData();

		// Limpiar el formulario después del envío
		setFormData({
			name: "",
			last_name: "",
			email: "",
			password: "",
			confirmPassword: "",
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
								name:
							</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="form-input"
							/>
						</Col>

						<Col xs={12} md={6}>
							<Form.Label className="form-label">
								last_name:
							</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								name="last_name"
								value={formData.last_name}
								onChange={handleChange}
								className="form-input"
							/>
						</Col>
					</Row>

					<Row className="mb-3">
						<Col xs={12}>
							<Form.Label className="form-label">
								Ingresa tu email:
							</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								name="email"
								value={formData.email}
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
								name="password"
								value={formData.password}
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
								name="confirmPassword"
								value={formData.confirmPassword}
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
