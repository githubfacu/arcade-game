import React from 'react';

const Premio = ({ src, alt, hidden }) => {

  // const isHidden = () => {
  //   if(hidden){
  //     return '/Images/Binary_Land_Hidden_Card.png'
  //   }
  //     return src
  // }

  return <img src={src} alt={alt} className="premio" />;
};

export default Premio;