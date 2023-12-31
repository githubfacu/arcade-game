import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSound } from '../Context/SoundContext';
import '../styles/CharacterSelection.css'

const CharacterSelection = () => {
  const navigate = useNavigate();
  const { pauseIsThisIt } = useSound();

  pauseIsThisIt();

  useEffect(() => {
    if(sessionStorage.getItem('pin')){
      sessionStorage.clear()
    }else{
      window.location.replace('/')
    }
  }, []);

  const handleCharacterClick = async (character) => {
    const audio = new Audio('Audios/start.wav');
    await audio.play();
    sessionStorage.setItem('pin', 'A')
    navigate(`/game?character=${character}`);
  };

  const handleCharacterHover = () => {
    const audio = new Audio('/Audios/select.wav');
    audio.play();
  };

  return (
    <div className='fondo'>
      <h2 className='select'>SELECT PLAYER</h2>
        <div className='personajes'>
          <img
            src="/Images/malon.png"
            alt="Personaje 1"
            onMouseOver={() => handleCharacterHover()}
            onClick={() => handleCharacterClick(1)}
          />
          <img
            src="/Images/gurin.png"
            alt="Personaje 2"
            onMouseOver={() => handleCharacterHover()}
            onClick={() => handleCharacterClick(2)}
          />
        </div>
    </div>
  );
};

export default CharacterSelection;