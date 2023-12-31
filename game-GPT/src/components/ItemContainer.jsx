import React, { useState, useEffect } from 'react';

const ItemContainer = ({ premios, pause }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (pause) {
      setTimeout(()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);        
      },3000)
    }
  }, [pause, premios]);

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