import React from 'react';
import '../styles/Button.css';

const Button = ({ onButtonClick }) => {
  return <div onClick={onButtonClick} className='div-button'>
    <button class='video-game-button'>A</button>

  </div>;
};

export default Button;