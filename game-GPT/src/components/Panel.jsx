import React, { useState, useEffect } from 'react';
import '../styles/Panel.css'

const Panel = ({ premios, pause, indice }) => {
  const [itemsArr, setItemsArr] = useState([])
  const [score, setScore] = useState(0)
  const items = premios


  const renderizarElemento = (index) => {

    if(itemsArr[index]){
      const itemEnArr = itemsArr[index];
      const itemOriginal = items[index];

      if (itemEnArr === itemOriginal) {

        return (
            <img
              key={index}
              src={itemEnArr.src}
              alt={itemEnArr.alt}
              style={{ filter: 'none' }}               
            />        
        );
      } else {
        return (
          <img
            key={index}
            src={items[index].src}
            alt={items[index].alt}
          />
        );
      };
    } else {
      return (
        <img
          key={index}
          src={items[index].src}
          alt={items[index].alt}
        />
      );
    };
  }

  useEffect(() => {
    if(indice >= 0 && pause === true){
      const premioEncontrado = premios.find((premio) => premio.id === indice + 1)
      setItemsArr((prevItemsArr) => [...prevItemsArr, premioEncontrado]);
    }
    console.log(itemsArr);
  }, [pause]);


  useEffect(() => {
    const index = itemsArr.length -1
    if(pause === true && itemsArr[index] === items[index]){
      setScore((prev) => prev + 1)
    }
  }, [itemsArr]);


  return (
    <div className='contenedor-de-premios'>
        <div className="panel">
          <ul>
            <li key='1' className="casilla">
              {renderizarElemento(0)}
            </li>
            <li key='2' className="casilla">
              {renderizarElemento(1)}
            </li>
            <li key='3' className="casilla">
              {renderizarElemento(2)}
            </li>
            <li key='4' className="casilla">
              {renderizarElemento(3)}
            </li>
            <li key='5' className="casilla">
              {renderizarElemento(4)}
            </li>
            <li key='6' className="casilla">
              {renderizarElemento(5)}
            </li>
            <li key='7' className="casilla">
              {renderizarElemento(6)}
            </li>
            <li key='8' className="casilla">
              {renderizarElemento(7)}
            </li>
            <li key='9' className="casilla">
              {renderizarElemento(8)}
            </li>
          </ul>
        </div>
        <p>Score: {score} to 9</p>      
    </div>
  );
};

export default Panel;