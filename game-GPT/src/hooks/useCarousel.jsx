import { useState, useEffect } from 'react';

const useCarousel = (premios) => {
  const [currentPremioIndex, setCurrentPremioIndex] = useState(0);
  const [visiblePremios, setVisiblePremios] = useState(premios);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransition(true);
      setCurrentPremioIndex((prevIndex) => (prevIndex + 1) % premios.length);

      setTimeout(() => {
        setTransition(false);
      }, 500); // Ajusta el tiempo de transición según tus necesidades
    }, 1000); // Cambia este valor según la velocidad deseada de cambio de premios

    return () => clearInterval(intervalId);
  }, [premios]);

  useEffect(() => {
    const updatedVisiblePremios = [
      ...premios.slice(currentPremioIndex),
      ...premios.slice(0, currentPremioIndex),
    ].slice(0, 9);

    setVisiblePremios(updatedVisiblePremios);
  }, [currentPremioIndex, premios]);

  const containerStyle = {
    transition: transition ? 'transform 0.5s ease-in-out' : 'none',
  };

  return { visiblePremios, containerStyle };
};

export default useCarousel;