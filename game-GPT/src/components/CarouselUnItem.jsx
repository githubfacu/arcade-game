import React from 'react';
import Premio from './Premio';
import useCarousel from '../hooks/useCarousel';
import '../styles/Carousel.css';

const Carousel1Item = ({ premios }) => {
  const { visiblePremios, containerStyle } = useCarousel(premios, 1);

  return (
    <div className="carousel-unico" style={containerStyle}>
      {visiblePremios.map((premio) => (
        <Premio key={premio.id} src={premio.src} alt={premio.alt} />
      ))}
    </div>
  );
};

export default Carousel1Item;