import React, { useState, useEffect } from 'react';

const ItemContainer = ({ premios, pause }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Lógica para actualizar el índice actual cuando cambia la prop pauseRender
    if (pause) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);
    }
  }, [pause, premios]);

  const currentPremio = premios[currentIndex];

  return (
    <div style={{border: '1px solid white'}}>
      <div className='item-div'>
        {currentPremio && <img src={currentPremio.src} alt="item-premio" />}
      </div>
    </div>
  );
};

export default ItemContainer;