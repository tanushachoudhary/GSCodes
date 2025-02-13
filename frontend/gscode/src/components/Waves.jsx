// Waves.js
import React from "react";
import Wave from "react-wavify";

function Waves() {
  return (
    <>
    <div className="relative w-full h-48 overflow-hidden">
      <Wave
        className="absolute w-full h-full"
        fill="#dbbff6"
        paused={false}
        options={{ height: 60, amplitude: 20, speed: 0.2, points: 4 }}
      />
      <Wave
        className="absolute w-full h-full"
        fill="#b87fed"
        paused={false}
        options={{ height: 90, amplitude: 25, speed: 0.3, points: 5 }}
      />
      <Wave
        className="absolute w-full h-full"
        fill="#8a2be2"
        paused={false}
        options={{ height: 120, amplitude: 30, speed: 0.13, points: 6 }}
      />
    </div>
    </>
  );
}

export default Waves;
