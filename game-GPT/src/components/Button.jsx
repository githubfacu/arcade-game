import React from 'react';
import '../styles/Button.css';

const Button = ({ onButtonClick }) => {

  return <div onClick={onButtonClick}>
    <button className='video-game-button'>A</button>

  </div>;
};

export default Button;