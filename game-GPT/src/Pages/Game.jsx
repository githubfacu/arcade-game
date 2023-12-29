import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GameContainer from '../components/GameContainer';
import Carousel from '../components/Carousel';
import Button from '../components/Button';
import { useSound } from '../Context/SoundContext';
import Carousel1Item from '../components/CarouselUnItem';
import '../styles/Game.css'

const Game = () => {
  const location = useLocation();
  const character = new URLSearchParams(location.search).get('character');
  const characterImage = character === '1' ? '/Images/malon.png' : '/Images/gurin.png';
  const [showGameContainer, setShowGameContainer] = useState(true);
  const [gameContainerUnmounted, setGameContainerUnmounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tirosRestantes, setTirosRestantes] = useState(3);
  const { playIsThisIt } = useSound();

  const premios = [
    { id: 1, src: '/Images/premios/Binary_Land_Cake.png', alt: 'Premio 1' },
    { id: 2, src: '/Images/premios/Binary_Land_Candle.png', alt: 'Premio 2' },
    { id: 3, src: '/Images/premios/Binary_Land_Card.png', alt: 'Premio 3' },
    { id: 4, src: '/Images/premios/Binary_Land_Harp.png', alt: 'Premio 4' },
    { id: 5, src: '/Images/premios/Binary_Land_PenguinTile.png', alt: 'Premio 5' },
    { id: 6, src: '/Images/premios/Binary_Land_Planet.png', alt: 'Premio 6' },
    { id: 7, src: '/Images/premios/Binary_Land_Umbrella.png', alt: 'Premio 7' },
    { id: 8, src: '/Images/premios/Binary_Land_Violin.png', alt: 'Premio 8' },
    { id: 9, src: '/Images/premios/Binary_Land_Whale.png', alt: 'Premio 9' },
  ];

  useEffect(() => {
    // Desmontar el componente después de 3 segundos
    const timeoutId = setTimeout(() => {
      setShowGameContainer(false);
      setGameContainerUnmounted(true);
    }, 3000);

    // Limpiar el temporizador al desmontar el componente Game.jsx
    return () => clearTimeout(timeoutId);
  }, []);


  const handleButtonClick = () => {
    if (tirosRestantes > 0) {
      // Lógica para lanzar la Button hacia el carrusel
      // Puedes actualizar el estado de tirosRestantes y otras lógicas aquí
    }
  };


  return (
    <>
      {showGameContainer && <GameContainer characterImage={characterImage} />}
      {gameContainerUnmounted && 
        <div className='container1'>
          {playIsThisIt()}
          <Carousel premios={premios} />
          <div className='container2'>
            <Carousel1Item premios={premios} />
            <Button onButtonClick={handleButtonClick} />            
          </div>

        </div>}
    </>
  );
};

export default Game;