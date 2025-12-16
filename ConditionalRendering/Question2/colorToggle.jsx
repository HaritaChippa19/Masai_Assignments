import React, { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          padding: "20px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue",
          marginBottom: "10px"
        }}
      >
        This div changes color
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
};

export default ColorToggle;
