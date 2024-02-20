import React from "react";
import FormTexto from "../components/FormTexto/FormTexto";
import FormInfoPersonal from "../components/FormInfoPersonal/FormInfoPersonal";
import FormExperienciaTrabajo from "../components/FormExperienciaTrabajo/FormExperienciaTrabajo";
import PerfilLaboral from "../components/PerfilLaboralForm/PerfilLaboral";
import FormTipoTrabajo from "../components/FormTipoTrabajo/FormTipoTrabajo";

const Formulario = () => {
  return (
    <>
      <FormTexto />
      <FormInfoPersonal />
      <PerfilLaboral />
      <FormExperienciaTrabajo />
      <FormTipoTrabajo />
      <button type="submit">Submit</button>
    </>
  );
};

export default Formulario;
