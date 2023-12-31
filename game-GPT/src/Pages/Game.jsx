import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GameContainer from '../components/GameContainer';
import Carousel from '../components/Carousel';
import Button from '../components/Button';
import { useSound } from '../Context/SoundContext';
import CarouselUnItem from '../components/CarouselUnItem';
import Panel from '../components/Panel';
import ArcadeCabinet from '../components/ArcadeCabinet';
import ItemContainer from '../components/ItemContainer';
import '../styles/Game.css'

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const character = new URLSearchParams(location.search).get('character');
  const characterImage = character === '1' ? '/Images/malon.png' : '/Images/gurin.png';
  const [showGameContainer, setShowGameContainer] = useState(true);
  const [gameContainerUnmounted, setGameContainerUnmounted] = useState(false);
  const [pauseCarousel, setPauseCarousel] = useState(false);
  const [visiblePremioIndex, setVisiblePremioIndex] = useState(0);
  const [tirosRestantes, setTirosRestantes] = useState(3);
  const { playIsThisIt } = useSound();
  const [panelPremios, setPanelPremios] = useState([]);

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

    if(sessionStorage.getItem('pin')){
      const timeoutId = setTimeout(() => {
        setShowGameContainer(false);
        setGameContainerUnmounted(true);
        //sessionStorage.clear()
      }, 3000);
    return () => clearTimeout(timeoutId);      
    }else{
      window.location.replace('/character-selection')
    }

  }, []);


  const handleButtonClick = () => {
    const audio = new Audio('/Audios/bonus-alert-767.wav');
    audio.play();

    if (tirosRestantes > 0) {

      setPauseCarousel(true);
      setTimeout(() => {
        setPauseCarousel(false);
      }, 3000);

      const currentIndex = visiblePremioIndex;
      console.log('Índice del premio visible:', currentIndex);

      // Puedes actualizar el estado de tirosRestantes y otras lógicas aquí
    }
  };

  const handleVisiblePremioChange = (index) => {
    setVisiblePremioIndex(index);
  };

  useEffect(() => {

    setTimeout(()=>{
      playIsThisIt();
    }, 3000)
  }, []);

  const asignarPremiosAlPanel = () => {
    const premiosAleatorios = [...premios];
    premiosAleatorios.sort(() => Math.random() - 0.5);
    setPanelPremios(premiosAleatorios.slice(0, 9));
  };

  useEffect(() => {
    asignarPremiosAlPanel();
  }, []);

  return (
    <>
      {showGameContainer && <GameContainer characterImage={characterImage} />}
      {gameContainerUnmounted && 
        <div className='container1'>
          <Carousel premios={premios} pause={pauseCarousel} />
          <div className='horizontal-container'>
            <ItemContainer premios={panelPremios} pause={pauseCarousel} />

            <ArcadeCabinet>

              <CarouselUnItem premios={premios} pause={pauseCarousel} onVisibleChange={handleVisiblePremioChange}/>
              <Button onButtonClick={handleButtonClick} />

            </ArcadeCabinet>

            <Panel premios={panelPremios} pause={pauseCarousel} />
          </div>

        </div>}
    </>
  );
};

export default Game;