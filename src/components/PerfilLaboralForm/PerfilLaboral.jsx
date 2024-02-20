import React, { useState } from "react";
import "./PerfilLaboral.css";

const PerfilLaboral = () => {
  const [options, setOptions] = useState({
    python: 0,
    javascript: 0,
    html: 0,
    css: 0,
    java: 0,
    php: 0,
    ruby: 0,
    scala: 0,
    perl: 0,
    go: 0,
    cplusplus: 0,
    kotlin: 0,
    swift: 0,
    csharp: 0,
    typescript: 0,
    assembly: 0,
    r: 0,
    bash: 0,
    shell: 0,
    oracle: 0,
    cassandra: 0,
    sqlite: 0,
    redis: 0,
    mongodb: 0,
    postgresql: 0,
    mysql: 0,
    firebase: 0,
    mariadb: 0,
    microsoftsql: 0,
    jquery: 0,
    react: 0,
    spring: 0,
    angular: 0,
    vuejs: 0,
    laravel: 0,
    django: 0,
    rubyonrails: 0,
    aspnet: 0,
    flask: 0,
    expressjs: 0,
    fastapi: 0,
    net: 0,
    nodejs: 0,
    github: 0,
    adobeillustrator: 0,
    adobephotoshop: 0,
    adobexd: 0,
    aws: 0,
    docker: 0,
    figma: 0,
    git: 0,
    googleanalytics: 0,
    googlecloud: 0,
    googledata: 0,
    invision: 0,
    invisionstudio: 0,
    jira: 0,
    kubernetes: 0,
    marvel: 0,
    microsoftexcel: 0,
    microsoftazure: 0,
    miro: 0,
    powerbi: 0,
    protoio: 0,
    qlik: 0,
    sketch: 0,
    spss: 0,
    tableau: 0,
    unity3d: 0,
    unrealengine: 0,
    zepelin: 0,
  });
  const maxValue = 3;

  const handleButtonClick = (option, operation) => {
    const currentCount = options[option];
    let newCount = operation === "plus" ? currentCount + 1 : currentCount - 1;
    newCount = Math.max(0, Math.min(newCount, maxValue));
    setOptions({ ...options, [option]: newCount });
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <h1 className="titulo-laboral">Perfil Laboral</h1>
      <div className="container-laboral">
        <p className="perfil-texto">
          Queremos conocer tus competencias y experiencia. A continuación podrás elegir las competencias que conoces con respecto a 3 niveles:
          <br />
          <br />
          <strong>Nivel 1:</strong> No tengo experiencia laboral, pero he desarrollado proyectos utilizando esta tecnología/herramienta.
          <br />
          <br />
          <strong>Nivel 2:</strong> Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante.
          <br />
          <br />
          <strong>Nivel 3:</strong> Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos.
          <br />
          <br />
          <strong>
            Ten en cuenta, de acuerdo a las competencias declaradas, te pediremos que seas capaz de demostrarlo de forma práctica durante el proceso de
            selección.
          </strong>
          <br />
          <br />
          <br />
        </p>
        <h1 className="titulo-conocimientos">
          <strong>Indícanos tus conocimientos a Nivel 1, 2 o 3 </strong>
        </h1>
      </div>
      <div>
        <div className="container-perfil">
          <div className="fila1">
            <h3 className="fila-titulo">Lenguajes:</h3>
            {[
              "Python",
              "JavaScript",
              "HTML",
              "CSS",
              "Java",
              "PHP",
              "Ruby",
              "Scala",
              "Cplusplus",
              "Kotlin",
              "Swift",
              "Csharp",
              "TypeScript",
              "Assembly",
              "R",
              "Go",
              "Bash",
              "Shell",
            ].map((item, index) => (
              <div key={index} className="input-row">
                <div className="title">
                  <h4 className="text">{item}</h4>
                </div>
                <div className="input">
                  <button
                    className="minus"
                    aria-label="Decrease by one"
                    disabled={options[item.toLowerCase()] === 0}
                    onClick={() => handleButtonClick(item.toLowerCase(), "minus")}
                  >
                    -
                  </button>
                  <div className="number">{options[item.toLowerCase()]}</div>
                  <button
                    className="plus"
                    aria-label="Increase by one"
                    disabled={options[item.toLowerCase()] === maxValue}
                    onClick={() => handleButtonClick(item.toLowerCase(), "plus")}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="fila2">
            <h3 className="fila-titulo">Bases o frameworks:</h3>
            {[
              "Oracle",
              "Cassandra",
              "SQLite",
              "Redis",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Firebase",
              "MariaDB",
              "MicrosoftSQL",
              "JQuery",
              "React",
              "Spring",
              "Angular",
              "Vuejs",
              "Laravel",
              "Django",
              "RubyOnRails",
              "Aspnet",
              "Flask",
              "Expressjs",
              "FastAPI",
              "NET",
              "Nodejs",
            ].map((item, index) => (
              <div key={index} className="input-row">
                <div className="title">
                  <h4 className="text">{item}</h4>
                </div>
                <div className="input">
                  <button
                    className="minus"
                    aria-label="Decrease by one"
                    disabled={options[item.toLowerCase()] === 0}
                    onClick={() => handleButtonClick(item.toLowerCase(), "minus")}
                  >
                    -
                  </button>
                  <div className="number">{options[item.toLowerCase()]}</div>
                  <button
                    className="plus"
                    aria-label="Increase by one"
                    disabled={options[item.toLowerCase()] === maxValue}
                    onClick={() => handleButtonClick(item.toLowerCase(), "plus")}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="fila3">
            <h3 className="fila-titulo">Herramientas:</h3>
            {[
              "Github",
              "AdobeIllustrator",
              "AdobePhotoshop",
              "AdobeXD",
              "AWS",
              "Docker",
              "Figma",
              "GIT",
              "GoogleAnalytics",
              "GoogleCloud",
              "GoogleData",
              "Invision",
              "InVisionStudio",
              "Jira",
              "Kubernetes",
              "Marvel",
              "MicrosoftExcel",
              "MicrosoftAzure",
              "Miro",
              "PowerBI",
              "Protoio",
              "Qlik",
              "Sketch",
              "SPSS",
              "Tableau",
              "Unity3D",
              "UnrealEngine",
              "Zepelin",
            ].map((item, index) => (
              <div key={index} className="input-row">
                <div className="title">
                  <h4 className="text">{item}</h4>
                </div>
                <div className="input">
                  <button
                    className="minus"
                    aria-label="Decrease by one"
                    disabled={options[item.toLowerCase()] === 0}
                    onClick={() => handleButtonClick(item.toLowerCase(), "minus")}
                  >
                    -
                  </button>
                  <div className="number">{options[item.toLowerCase()]}</div>
                  <button
                    className="plus"
                    aria-label="Increase by one"
                    disabled={options[item.toLowerCase()] === maxValue}
                    onClick={() => handleButtonClick(item.toLowerCase(), "plus")}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilLaboral;
