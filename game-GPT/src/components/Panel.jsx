import React, { useState, useEffect } from 'react';
import '../styles/Panel.css'

const Panel = ({ premios, pause, indice }) => {
  const [itemsArr, setItemsArr] = useState([])
  const items = premios

  useEffect(() => {
    if(indice >= 0){
      const premioEncontrado = premios.find((premio) => premio.id === indice+1)
      if (premioEncontrado) {
        setItemsArr([premioEncontrado, ...itemsArr]);
      }
    }
    console.log(itemsArr);    
  }, [pause]);

  // que no se agregue 2 veces el objeto, comparar itemsArr[i] con items [i]

  return (
    <div className='contenedor-de-premios'>
        <div className="panel">
          <ul>
            <li key='0' className="casilla">
              <img src={items[0].src} alt={items[0].alt} style={{filter: ``}}/>
            </li>
            <li key='1' className="casilla">
              <img src={items[1].src} alt={items[1].alt} />
            </li>
            <li key='2' className="casilla">
              <img src={items[2].src} alt={items[2].alt} />
            </li>
            <li key='3' className="casilla">
              <img src={items[3].src} alt={items[3].alt} />
            </li>
            <li key='4' className="casilla">
              <img src={items[4].src} alt={items[4].alt} />
            </li>
            <li key='5' className="casilla">
              <img src={items[5].src} alt={items[5].alt} />
            </li>
            <li key='6' className="casilla">
              <img src={items[6].src} alt={items[6].alt} />
            </li>
            <li key='7' className="casilla">
              <img src={items[7].src} alt={items[7].alt} />
            </li>
            <li key='8' className="casilla">
              <img src={items[8].src} alt={items[8].alt} />
            </li>
          </ul>
        </div>
        <p>Score: X to 9</p>      
    </div>
  );
};

export default Panel;