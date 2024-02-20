import React, { useState } from "react";
import "./FormPlus.css"; // Importa el archivo CSS donde pondrás tus estilos

const FormInfoPlus = () => {
	const [nivelEducacional, setNivelEducacional] = useState("");
	const [carreraCurso1, setCarreraCurso1] = useState("");
	const [institucion1, setInstitucion1] = useState("");
	const [tipoInstitucion1, setTipoInstitucion1] = useState("");
	const [carreraCurso2, setCarreraCurso2] = useState("");
	const [institucion2, setInstitucion2] = useState("");
	const [tipoInstitucion2, setTipoInstitucion2] = useState("");
	const [situacionEducacional, setSituacionEducacional] = useState("");
	const [nivelIngles, setNivelIngles] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Lógica para manejar la presentación de datos
		console.log("Datos del formulario:", {
			nivelEducacional,
			carreraCurso1,
			institucion1,
			tipoInstitucion1,
			carreraCurso2,
			institucion2,
			tipoInstitucion2,
			situacionEducacional,
			nivelIngles,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="formulario-per">
			<h2 className="form-title">INFORMACIÓN PERSONAL</h2>

			{/* Nivel educacional */}
			<div className="form-flex">
				<label className="select-label">
					¿Cuál es tu máximo nivel educacional? *
					<select
						className="custom-select"
						value={nivelEducacional}
						onChange={(e) => setNivelEducacional(e.target.value)}
						required
					>
						<option value="0">Seleccionar</option>
						<option value="escolar">Escolar</option>
						<option value="universitario">Universitario</option>
						<option value="master">Master</option>
						{/* Opciones para el nivel educacional */}
					</select>
				</label>
			</div>

			{/* Carrera/Curso 1 */}

			<div className="form-colum">
				<label>
					Nombre de la carrera, curso, bootcamp o certificación 1: *
				</label>
				<input
					className="input-celeste"
					type="text"
					value={carreraCurso1}
					onChange={(e) => setCarreraCurso1(e.target.value)}
					required
				/>
			</div>

			{/* Institución 1 */}
			<div className="form-colum">
				<label> Nombre institución 1: * </label>

				<input
					className="input-celeste"
					type="text"
					value={institucion1}
					onChange={(e) => setInstitucion1(e.target.value)}
					required
				/>
			</div>

			{/* Tipo Institución 1 */}
			<div className="form-colum">
				<label>Tipo institución 1: *</label>

				<select
					className="select-celeste"
					value={tipoInstitucion1}
					onChange={(e) => setTipoInstitucion1(e.target.value)}
					required
				>
					<option value="1">Nivel 1</option>
					<option value="2">Nivel 2</option>
					<option value="3">Nivel 3</option>
					{/* Opciones para el tipo de institución */}
				</select>
			</div>

			{/* Carrera/Curso 2 */}

			{/* Situación educacional actual */}
			<div className="form-colum">
				<label>¿Cuál es tu situación educacional actual?</label>

				<select
					className="select-celeste"
					value={situacionEducacional}
					onChange={(e) => setSituacionEducacional(e.target.value)}
				>
					<option value="1">Cursando</option>
					<option value="2">Congelado</option>
					<option value="3">Egresado</option>
					{/* Opciones para la situación educacional actual */}
				</select>
			</div>

			{/* Nivel de inglés */}
			<div className="form-colum">
				<label className="select-label">
					Nivel inglés:
					<select
						className="custom-select"
						value={nivelIngles}
						onChange={(e) => setNivelIngles(e.target.value)}
					>
						<option value="">Seleccionar</option>
						<option value="bajo">Bajo</option>
						<option value="intermedio">Intermedio</option>
						<option value="avanzado">Avanzado</option>
						{/* Asigna valores únicos a cada opción */}
					</select>
				</label>
			</div>

			{/* Botón de envío */}
			<div className="form-colum"></div>
		</form>
	);
};

export default FormInfoPlus;
