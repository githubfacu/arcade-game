import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const StartScreen = ({ onEnterPress, onTransitionComplete }) => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate(); 
  const startScreenRef = useRef();
  const audio = new Audio('/Audios/init.wav');

  useEffect(() => {
    startScreenRef.current.focus();
  }, []);

  const handleKeyPress = async (event) => {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {

      await audio.play();

      setTimeout(() => {
        navigate('/character-selection');
      }, 2000);
    }
  };

  const handleMouseClick = async () => {
    await audio.play();

    setTimeout(() => {
      navigate('/character-selection');
    }, 2000);
  };

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          setVisible(true);
        }, 1000);
      }, 500);
    }, 2000);

    const keydownListener = (event) => {
      if (event.key === 'Enter') {
        clearInterval(blinkInterval);
        document.removeEventListener('keydown', keydownListener);
        onTransitionComplete();
      }
    };

    document.addEventListener('keydown', keydownListener);

    return () => {
      clearInterval(blinkInterval);
      document.removeEventListener('keydown', keydownListener);
    };
  }, [onEnterPress, onTransitionComplete]);

  return (
    <div
    tabIndex={0}
    ref={startScreenRef}
    onKeyDown={handleKeyPress}
    onClick={handleMouseClick}
      style={{
        width: '100%',
        height: '100vh',
        background: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        border: '10px solid white',
        transition: 'visibility 0.5s ease-in-out', // Agrega una transición
      }}
    >
      <img src="/Images/Binary Land 50.png" alt="logo" style={{maxWidth: '50%'}}/>
      <h2 style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }}>
        Press Enter to continue
      </h2>
    </div>
  );
};

export default StartScreen;