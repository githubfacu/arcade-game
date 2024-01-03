import React, { useState, useEffect } from 'react';

const ItemContainer = ({ premios, pause, tirosRestantes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    if (pause) {
      if (tirosRestantes === 0){
        return console.log('fin de la funcion en Item Cointainer');
      }      
      setTimeout(()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);        
      },3000)
    }
  }, [pause]);

  const currentPremio = premios[currentIndex];

  return (
    <div className='itemContain'>
        {currentPremio &&
          <>
            <img src={currentPremio.src} alt="item-premio" />
            <h3>{currentPremio.verticalName}</h3>
          </>
        }
    </div>
  );
};

export default ItemContainer;