import React, { useState } from 'react';
import { Route, Routes, Navigate, Router } from 'react-router-dom';
import './App.css';
import StartScreen from './Pages/StartScreen';
import CharacterSelection from './Pages/CharacterSelection';
import Game from './Pages/Game';
import { SoundProvider } from './Context/SoundContext';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);

  const handleEnterPress = () => {
    setShowStartScreen(false);
  };

  const handleTransitionComplete = () => {
    console.log('Transición completada');
  };

  return (
      <SoundProvider>
        <Routes>
          <Route path="/" element={showStartScreen ? (
                <StartScreen 
                onEnterPress={handleEnterPress} onTransitionComplete={handleTransitionComplete}/>
              ) : (
                <Navigate to="/character-selection" />
              )
            }
          />
          <Route path="/character-selection" element={<CharacterSelection />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </SoundProvider>
  );
};

export default App;