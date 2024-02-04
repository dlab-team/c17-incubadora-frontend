import React from 'react'
import './BannerPrincipal.css'



const BannerPrincipal = () => {
  return (
    <>
  {/* BANNER PRINCIPAL DEL HOME */}

    {/* ABRE TEXTO Y BOTON */}
    <div className='banner-principal'>
        <div className='txt-btn-banner-principal'>
            <h1>¿Buscas talento TI?</h1>
            <h3>Contrata Talento TI rápido, inteligente y eficiente</h3>
            <h5>Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas</h5>
            
            <div className='btn-banner-principal'>
              <button type="button" className="btn btn-light">Quiero contratar</button>
            </div>
        </div>
    {/* CIERRA TEXTO Y BOTON */}


      {/* ABRE IMAGEN */}
        <div className='img-banner-principal'>
            <img src='/cover_image.png'></img>
        </div>
      {/* CIERRA IMAGEN */}

{/*  BANNER PRINCIPAL DEL HOME */}
    </div>
    </>
  )
}

export default BannerPrincipal