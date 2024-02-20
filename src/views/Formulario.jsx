import React from "react";
import FormTexto from "../components/FormTexto/FormTexto";
import FormInfoPersonal from "../components/FormInfoPersonal/FormInfoPersonal";
import FormExperienciaTrabajo from "../components/FormExperienciaTrabajo/FormExperienciaTrabajo";

const Formulario = () => {
	return (
		<>
			<FormTexto />
			<FormInfoPersonal />
			<FormExperienciaTrabajo />
		</>
	);
};

export default Formulario;
