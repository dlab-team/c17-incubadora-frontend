import React from "react";
import "./FormLanding.css"; // Asegúrate de ajustar la ruta según tu estructura de archivos

const FormLanding = () => {
	return (
		<div className="formulario-container">
			<h3 className="titulo-formulario">
				Si eres empresa y buscas talento TI, déjanos tu información en
				este formulario. En breve te contactaremos:
			</h3>
			<form>
				<div className="form-row">
					<div className="form-column">
						<div className="label-container">
							<label className="custom-label" htmlFor="nombre">
								Nombre *
							</label>
						</div>
						<input
							className="custom-input"
							type="text"
							id="nombre"
							name="nombre"
							placeholder="Benito"
						/>
					</div>
					<div className="form-column">
						<div className="label-container">
							<label className="custom-label" htmlFor="apellido">
								Apellido *
							</label>
						</div>
						<input
							className="custom-input"
							type="text"
							id="apellido"
							name="apellido"
							placeholder="Martínez"
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-column">
						<div className="label-container">
							<label className="custom-label" htmlFor="email">
								Email corporativo *
							</label>
						</div>
						<input
							className="custom-input email-input"
							type="email"
							id="email"
							name="email"
							placeholder="ejemplo@correo.com"
						/>
					</div>
					<div className="form-column">
						<div className="label-container">
							<label className="custom-label" htmlFor="telefono">
								Número de teléfono *
							</label>
						</div>
						<input
							className="custom-input tel-input"
							type="tel"
							id="telefono"
							name="telefono"
							placeholder="+569987654321"
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-column">
						<div className="label-container">
							<label className="custom-label" htmlFor="empresa">
								¿A qué empresa perteneces? *
							</label>
						</div>
						<input
							className="custom-input text-input"
							type="text"
							id="empresa"
							name="empresa"
							placeholder="Nombre de la empresa"
						/>
					</div>
				</div>

				<div className="form-row">
					<label className="checkbox-label">
						Cargo/área de preferencia que buscas contratar *
					</label>
					<div className="checkbox-group">
						<div className="checkbox-item">
							<input
								type="checkbox"
								id="desarrollador_front"
								name="cargo"
								value="desarrollador_front"
							/>
							<label htmlFor="desarrollador_front">
								Desarrollador Front End
							</label>
						</div>
						<div className="checkbox-item">
							<input
								type="checkbox"
								id="desarrollador_full_stack"
								name="cargo"
								value="desarrollador_full_stack"
							/>
							<label htmlFor="desarrollador_full_stack">
								Desarrollador Full Stack / Backend
							</label>
						</div>
						<div className="checkbox-item">
							<input
								type="checkbox"
								id="disenador_ux_ui"
								name="cargo"
								value="disenador_ux_ui"
							/>
							<label htmlFor="disenador_ux_ui">
								Diseñador UX/UI
							</label>
						</div>
						<div className="checkbox-item">
							<input
								type="checkbox"
								id="analista_qa"
								name="cargo"
								value="analista_qa"
							/>
							<label htmlFor="analista_qa">Analista QA</label>
						</div>
						<div className="checkbox-item">
							<input
								type="checkbox"
								id="desarrollador_mobile"
								name="cargo"
								value="desarrollador_mobile"
							/>
							<label htmlFor="desarrollador_mobile">
								Desarrollador Mobile
							</label>
						</div>
						<div className="checkbox-item">
							<input
								type="checkbox"
								id="otra_area"
								name="cargo"
								value="otra_area"
							/>
							<label htmlFor="otra_area">Otra Área</label>
						</div>
					</div>
				</div>

				<div className="form-row">
					<div className="form-column">
						<label className="checkbox-label" htmlFor="dudas">
							¿Dudas? Déjalas acá!
						</label>
						<textarea
							className="dudas-form custom-input"
							id="dudas"
							name="dudas"
							rows="4"
							placeholder="Escribe tus dudas aquí"
						></textarea>
					</div>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};

export default FormLanding;
