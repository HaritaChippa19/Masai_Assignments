import React, { useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5; // skip forward 5 seconds
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5; // rewind 5 seconds
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        ref={videoRef}
        width="600"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls={false}
      ></video>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleForward}>⏩ Forward 5s</button>
        <button onClick={handleRewind}>⏪ Rewind 5s</button>
      </div>
    </div>
  );
}
