import React from "react";
import "./SinJrsNoHaySeniors.css";

const SinJrsNoHaySeniors = () => {
  return (
    <div className="banner3-container">
      <div className="banner3">
        <h1 className="title">Sin Juniors no hay Seniors</h1>
        <p className="text-banner3">
          En este programa unimos la
          <span className="banner3-span"> rapidez, eficiencia y visión de un desarrollador junior junto con la experiencia y liderazgo de un senior TI</span>,
          quien acompañará al talento junior contratado para potenciar tu área digital, acá te explicamos cómo:
        </p>

        <div className="grid-container">
          <div className="grid-item">
            <img src="holding-hourglass..png" alt="aceleramos" />
            <h3>Aceleramos</h3>
            <br />
            Aceleramos el proceso de contratación. Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en 5
            días.
          </div>
          <div className="grid-item">
            <img src="check.png" alt="acompañamos" />
            <h3>Acompañamos</h3>
            <br />
            Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates serán guiados y apoyados a nivel técnico por un mentor senior TI
            experto en tu área sin ningún costo ($0).
          </div>
          <div className="grid-item">
            <img src="pieces-of-puzzle.png" alt="potenciamos" />
            <h3>Potenciamos</h3>
            <br />
            Potenciamos y retenemos el talento. Realizamos un seguimiento de alta calidad para potenciar el crecimiento y desarrollo técnico de todos los
            desarrolladores contratados.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinJrsNoHaySeniors;
