import React from 'react'
import './ComoFuncionamos.css'



export const ComoFuncionamos = () => {
  return (
    <section className='como-funcionamos-section'>

    {/* ABRE CAJA DE TEXTO 1 IZQ COMO FUNCIONAMOS */}
    <div className='cf-txt-1-izq'>
        <h3>¿Cómo funcionamos?</h3>
        <h5>Da click a nuestro video y en sólo 60 segundos conoce Devsafio y cómo estamos cambiando el mundo TI, acelerando y potenciando las células tecnológicas.</h5>
    </div>
    {/* CIERRA CAJA DE TEXTO 1 COMO FUNCIONAMOS */}



    {/* ABRE CAJA DE TEXTO 2 DERECHA COMO FUNCIONAMOS */}
        <div className='cf-txt-2-der'>

            <div className='cf-txt-2-der-txt-y-logo'>
                <div className='cf-txt-2-der-txt-y-logo-top'>
                <h1>DEVSAFIO</h1>
                <h6>Un puente para impulsar potenciar y acelerar las carreras de programadores y la industria tecnológica.</h6>
                </div>
                <img src='./dev-isotipo-color.png' />
            </div>

            <div className='cf-txt-2-der-txt-y-logo-bottom'>
                <img src='./como-funcionamos.png' />
                <div>
                <h4>¿Como funcionamos?</h4>
                <h5>Te lo explico en 4 pasos</h5>
                </div>
            </div>
            
        </div>
    {/* CIERRA CAJA DE TEXTO 2 DERECHA COMO FUNCIONAMOS */}

    </section>
)
}
