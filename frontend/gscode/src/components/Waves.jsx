import React from "react";
import Wave from 'react-wavify'
import './Wave.css'
function Waves() {
  return (
    <div className="App">
      <div className="waveContainer">
        <Wave
          className="wave"
          fill="#dbbff6"
          paused={false}
          options={{
            height: 60,
            amplitude: 20,
            speed: 0.2,
            points: 4,
          }}
        />
        <Wave
          className="wave"
          fill="#b87fed"
          paused={false}
          options={{
            height: 90,
            amplitude: 25,
            speed: 0.3,
            points: 5,
          }}
        />
        <Wave
          className="wave"
          fill="#8a2be2"
          paused={false}
          options={{
            height: 120,
            amplitude: 30,
            speed: 0.13,
            points: 6,
          }}
        />
      </div>
    </div>
  );
}
export default Waves;
