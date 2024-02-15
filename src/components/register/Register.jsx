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
		<section className="bg_body_register pt-5">
			<Container className=" bg-white container-start">
				<Row className="justify-content-md-center">
					<Col xs={12} md={3}>
						<h1 className="pt-5 ">
							{formularioCreado
								? "¡Formulario enviado correctamente!"
								: "Regístrate"}
						</h1>
					</Col>
				</Row>

				<Form onSubmit={handleSubmit}>
					<Row className="justify-content-md-center pt-5 ">
						<Col className="col-md-auto" xs={12}>
							<p className="text-start text-md-end px-md-2">
								Nombre:
							</p>
						</Col>
						<Col xs={12} md={3}>
							<Form.Control
								type="text"
								placeholder=""
								name="nombre"
								value={formData.nombre}
								onChange={handleChange}
							/>
						</Col>

						<Col className="col-md-auto " xs={12}>
							<p className=" text-md-end text-start px-md-2">
								Apellido:
							</p>
						</Col>
						<Col xs={12} md={3}>
							<Form.Control
								type="text"
								placeholder=""
								name="apellido"
								value={formData.apellido}
								onChange={handleChange}
							/>
						</Col>
					</Row>

					<Row className="justify-content-md-center pt-3">
						<Col className="" xs={12} md={3}>
							<p className="text-start px-md-2">
								Ingresa tu correo:
							</p>
						</Col>
						<Col xs={12} md={6}>
							<Form.Control
								type="text"
								placeholder=""
								name="correo"
								value={formData.correo}
								onChange={handleChange}
							/>
						</Col>
					</Row>

					<Row className="justify-content-md-center pt-3">
						<Col className="col-md-5" xs={12}>
							<p className="text-start px-md-1">
								Crea tu contraseña:
							</p>
						</Col>
						<Col xs={12} md={4}>
							<Form.Control
								type="password"
								placeholder=""
								name="psw"
								value={formData.psw}
								onChange={handleChange}
							/>
						</Col>
					</Row>

					<Row className="justify-content-md-center pt-3">
						<Col className="col-md-5" xs={12}>
							<p className="text-start px-md-1">
								Reingresa tu contraseña:
							</p>
						</Col>
						<Col xs={12} md={4}>
							<Form.Control
								type="password"
								placeholder=""
								name="confirmPsw"
								value={formData.confirmPsw}
								onChange={handleChange}
							/>
						</Col>
					</Row>

					<Row className="justify-content-md-center pt-3">
						<Col xs={12} md={9} className="text-center">
							<Button variant="primary" type="submit">
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
