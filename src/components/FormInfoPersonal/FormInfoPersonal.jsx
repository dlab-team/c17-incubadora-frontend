import React, { useState } from "react";
import "./FormInfoPersonal.css";
import FormInfoPlus from "./FormInfoPlus";

const FormInfoPersonal = () => {
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [pais, setPais] = useState("");
	const [genero, setGenero] = useState("");
	const [estadoLaboral, setEstadoLaboral] = useState("");
	const [cargosInteres, setCargosInteres] = useState([]);

	const handleCargosInteresChange = (cargo) => {
		if (cargosInteres.includes(cargo)) {
			setCargosInteres(cargosInteres.filter((c) => c !== cargo));
		} else {
			setCargosInteres([...cargosInteres, cargo]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes manejar la lógica para enviar los datos del formulario
		console.log("Datos del formulario:", {
			nombre,
			apellido,
			email,
			telefono,
			ciudad,
			pais,
			genero,
			estadoLaboral,
			cargosInteres,
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="formulario-personal">
				<h2 className="form-tittle">INFORMACIÓN PERSONAL</h2>
				<div className="form-grid">
					<label>
						<input
							className="input-celeste"
							type="text"
							placeholder="Ingrese su nombre"
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="input-celeste"
							type="text"
							placeholder="Ingrese su apellido"
							value={apellido}
							onChange={(e) => setApellido(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="input-celeste"
							type="email"
							placeholder="Ingrese su correo electrónico"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="input-celeste"
							type="tel"
							placeholder="Ingrese su número de teléfono"
							value={telefono}
							onChange={(e) => setTelefono(e.target.value)}
						/>
					</label>
					<label>
						<input
							className="input-celeste"
							type="text"
							placeholder="Ingrese su ciudad"
							value={ciudad}
							onChange={(e) => setCiudad(e.target.value)}
						/>
					</label>
					<label>
						<input
							className="input-celeste"
							type="text"
							placeholder="Ingrese su país"
							value={pais}
							onChange={(e) => setPais(e.target.value)}
						/>
					</label>
				</div>
				<div className="form-grid">
					{" "}
					<div className="label-form">
						<label className="select-label">
							¿Cuál es tu estado laboral actual? *
							<select
								className="custom-select"
								value={estadoLaboral}
								onChange={(e) =>
									setEstadoLaboral(e.target.value)
								}
								required
							>
								<option value="">Seleccionar</option>
								<option value="cesantePrimeravez">
									Cesante, busco empleo en TI por primera vez.
								</option>
								<option value="cesanteExperienciaTI">
									Cesante, ya he trabajado antes en TI.
								</option>
								<option value="trabajoEnTI">
									Tengo trabajo en TI, pero busco otro.
								</option>
								<option value="trabajoOtrasAreasTI">
									Tengo trabajo (en otras áreas), pero busco
									en TI.
								</option>
							</select>
						</label>
					</div>
					<div className="label-form">
						{" "}
						<label className="select-label">
							¿Con qué género te identificas? *
							<select
								className="custom-select"
								value={genero}
								onChange={(e) => setGenero(e.target.value)}
								required
							>
								<option value="">Seleccionar</option>
								<option value="masculino">Masculino</option>
								<option value="femenino">Femenino</option>
								<option value="no-binario">No binario</option>
								{/* Agrega más opciones según sea necesario */}
							</select>
						</label>
					</div>
				</div>
				<div className="   form-flex ">
					<label>
						<h3 className="cargo-title">
							¿Cuál o cuáles cargos te gustaría optar? *
						</h3>

						<div className="form-rows">
							<label>
								<input
									type="checkbox"
									value="DesarrolladorFullStack"
									checked={cargosInteres.includes(
										"DesarrolladorFullStack"
									)}
									onChange={() =>
										handleCargosInteresChange(
											"DesarrolladorFullStack"
										)
									}
								/>
								Desarrollador/a Full Stack
							</label>
							<label>
								<input
									type="checkbox"
									value="DesarrolladorBackEnd"
									checked={cargosInteres.includes(
										"DesarrolladorBackEnd"
									)}
									onChange={() =>
										handleCargosInteresChange(
											"DesarrolladorBackEnd"
										)
									}
								/>
								Desarrollador/a Back End
							</label>
							<label>
								<input
									type="checkbox"
									value="DesarrolladorFrontEnd"
									checked={cargosInteres.includes(
										"DesarrolladorFrontEnd"
									)}
									onChange={() =>
										handleCargosInteresChange(
											"DesarrolladorFrontEnd"
										)
									}
								/>
								Desarrollador/a Front End
							</label>
							<label>
								<input
									type="checkbox"
									value="DisenadorUX"
									checked={cargosInteres.includes(
										"DisenadorUX"
									)}
									onChange={() =>
										handleCargosInteresChange("DisenadorUX")
									}
								/>
								Diseñador/a UX / UX Research o UI
							</label>
							<label>
								<input
									type="checkbox"
									value="DesarrolladorMovil"
									checked={cargosInteres.includes(
										"DesarrolladorMovil"
									)}
									onChange={() =>
										handleCargosInteresChange(
											"DesarrolladorMovil"
										)
									}
								/>
								Desarrollador/a Móvil
							</label>
							<label>
								<input
									type="checkbox"
									value="DataScientist"
									checked={cargosInteres.includes(
										"DataScientist"
									)}
									onChange={() =>
										handleCargosInteresChange(
											"DataScientist"
										)
									}
								/>
								Data Scientist o especialista machine learning
							</label>
							<label>
								<input
									type="checkbox"
									value="IngenieriaDatos"
									checked={cargosInteres.includes(
										"IngenieriaDatos"
									)}
									onChange={() =>
										handleCargosInteresChange(
											"IngenieriaDatos"
										)
									}
								/>
								Ingeniería de Datos
							</label>
						</div>
					</label>
				</div>

				{/* Otros campos del formulario */}
				<div className="form-flex">
					<button className="button-form-personal" type="submit">
						Enviar
					</button>
				</div>
			</form>
			<FormInfoPlus />
		</>
	);
};

export default FormInfoPersonal;
