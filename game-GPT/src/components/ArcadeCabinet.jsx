import React from 'react'
import '../styles/ArcadeCabinet.css'

const ArcadeCabinet = (props) => {

    const carousel = props.children[0]
    const boton = props.children[1]

  return (
    <div className="container">
  <div className="arcade-machine">
    <div className="shadow"></div>
    <div className="top">
      <div className="stripes"></div>
    </div>
    <div className="screen-container">
      <div className="shadow"></div>
      <div className="screen">
        <div className="screen-display"></div>
        <div className="premio-container">
          {carousel}
        </div>
      </div>
      <div className="joystick">
        <div className="stick"></div>
      </div>
    </div>
    <div className="board">
        <div style={{marginTop:'7%'}}>{boton}</div>
    </div>
    <div className="bottom">
      <div className="stripes"></div>
    </div>
  </div>
  {/* <footer>
    <h3>Arcade Cabinet made with pure CSS by <span>Jhonny Gil</span></h3>
    <h4>Dedicated to the great Book Ready Player One by Ernest Cline</h4>
    <p>Original Dribbble Shot by <a href="https://dribbble.com/shots/2441190-Ready-Player-One">Ryan Prudhomme</a></p>
  </footer> */}
</div>
  )
}

export default ArcadeCabinet