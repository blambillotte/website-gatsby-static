import React from 'react';
import Particles from 'particlesjs';


class Particle extends React.Component {

  componentDidMount() {
    Particles.init({
      selector: '.particle',
      connectParticles: true,
      maxParticles: 150,
      color: '#ebe9e7',
      // options for breakpoints
      responsive: [
        {
          breakpoint: 768,
          options: { maxParticles: 60, }
        }, {
          breakpoint: 425,
          options: {
            maxParticles: 50,
          }
        }, {
          breakpoint: 320,
          options: {
            maxParticles: 30 // disables particles.js
          }
        }
      ]
    });
  };

  componentWillUnmount() {
    Particles.destroy();
  }


  render() {
    return (
      <div>
        <canvas className="particle"></canvas>
      </div>
    )
  }
}

export default Particle;
