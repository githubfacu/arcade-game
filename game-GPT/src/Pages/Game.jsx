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
  const [visiblePremioIndex, setVisiblePremioIndex] = useState(-1);
  const [tirosRestantes, setTirosRestantes] = useState(9);
  const { playIsThisIt } = useSound();
  const [panelPremios, setPanelPremios] = useState([]);

  const premios = [
    { id: 1, src: '/Images/premios/Binary_Land_Cake.png', hidden: false, name: 'Cake', verticalName: 'C\na\nk\ne', alt: 'Premio 1' },
    { id: 2, src: '/Images/premios/Binary_Land_Candle.png', hidden: true, name: 'Candle', verticalName: 'C\na\nn\nd\nl\ne', alt: 'Premio 2' },
    { id: 3, src: '/Images/premios/Binary_Land_Card.png', hidden: false, name: 'Card', verticalName: 'C\na\nr\nd', alt: 'Premio 3' },
    { id: 4, src: '/Images/premios/Binary_Land_Harp.png', hidden: false, name: 'Harp', verticalName: 'H\na\nr\np', alt: 'Premio 4' },
    { id: 5, src: '/Images/premios/Binary_Land_PenguinTile.png', hidden: true, name: 'Penguin', verticalName: 'P\ne\nn\ng\nu\ni\nn', alt: 'Premio 5' },
    { id: 6, src: '/Images/premios/Binary_Land_Planet.png', hidden: true, name: 'Planet', verticalName: 'P\nl\na\nn\ne\nt', alt: 'Premio 6' },
    { id: 7, src: '/Images/premios/Binary_Land_Umbrella.png', hidden: false, name: 'Umbrella', verticalName: 'U\nm\nb\nr\ne\nl\nl\na', alt: 'Premio 7' },
    { id: 8, src: '/Images/premios/Binary_Land_Violin.png', hidden: true, name: 'Violin', verticalName: 'V\ni\no\nl\ni\nn', alt: 'Premio 8' },
    { id: 9, src: '/Images/premios/Binary_Land_Whale.png', hidden: false, name: 'Whale', verticalName: 'W\nh\na\nl\ne', alt: 'Premio 9' },
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

    const currentIndex = visiblePremioIndex;
    console.log('Índice del premio visible:', currentIndex);    

    if (tirosRestantes > 0) {

      setPauseCarousel(true);
      setTimeout(() => {
        setPauseCarousel(false);
      }, 3000);

    }
  };

  const handleVisiblePremioChange = (index) => {
    setVisiblePremioIndex(index);
  };

  // useEffect(() => {

  //   setTimeout(()=>{
  //     playIsThisIt();
  //   }, 3000)
  // }, []);

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
              <Button onButtonClick={handleButtonClick} pause={pauseCarousel} />

            </ArcadeCabinet>

            <Panel premios={panelPremios} pause={pauseCarousel} indice={visiblePremioIndex}/>
          </div>

        </div>}
    </>
  );
};

export default Game;