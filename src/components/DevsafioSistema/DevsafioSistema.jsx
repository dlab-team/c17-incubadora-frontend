import React, { useState } from "react";
import "./DevsafioSistema.css";
import FormLanding from "./FormLanding";

const DevsafioSistema = () => {
	const handleClick = () => {
		const button = document.querySelector(".agendar-button");

		button.classList.remove("clicked");

		setTimeout(() => {
			button.classList.add("clicked");
		}, 10);
	};
	return (
		<>
			<div className="devsistema-container">
				<div className="devsistema-text ">
					<h2 className="titulo">DEVsafiamos el sistema</h2>
					<p className="descripcion">
						¿Escasez de talento Senior? No te preocupes, en{" "}
						<span className="destacado">Devsafio</span> encontrarás
						el talento que necesitas en nuestro programa Mentorías.
					</p>
					<p className="descripcion">
						Completa el formulario y te contactaremos en breve para
						acompañarte en la búsqueda de Talento TI que necesitas
					</p>
					<img
						src="Intersect.png"
						alt="Descripción de la imagen"
						className="imagen"
					/>
					<p className="bold-text">
						¡Agenda una asesoría con nosotros si quieres saber más
						sobre cómo acelerar y potenciar tu próximo Talento TI!
					</p>
					<button
						className="agendar-button bold-text"
						onClick={handleClick}
					>
						Agendar
					</button>
				</div>
				<div className="devsistema-form ">
					<FormLanding />
				</div>
			</div>
		</>
	);
};

export default DevsafioSistema;
