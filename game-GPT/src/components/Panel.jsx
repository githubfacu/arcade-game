import React, { useState } from 'react';
import '../styles/Panel.css'

const Panel = ({ premios, pause }) => {



  return (
    <div className='contenedor-de-premios'>
        <div className="panel">
            {premios.map((premio, index) => (
            <div key={index} className="casilla">
                {premio && <img src={premio.src} alt={premio.alt} />}
            </div>
            ))}
        </div>
        <p>Score: X to 9</p>      
    </div>
  );
};

export default Panel;