import Wavify from "react-wavify";

function WavesBackground() {
  return (
    <Wavify
      fill="#2196F3"
      paused={false}
      options={{ height: 20, amplitude: 30, speed: 0.2, points: 3 }}
    />
  );
}

export default WavesBackground;