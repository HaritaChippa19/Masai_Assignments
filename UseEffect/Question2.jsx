import React, { useEffect } from "react";

const Counter = () => {
  useEffect(() => {
    let count = 0;

    const countEl = document.getElementById("count");
    const btn = document.getElementById("btn");

    btn.onclick = () => {
      count++;
      countEl.innerText = count;

      if (count % 3 === 0) {
        alert(`The current number ${count} is divisible by 3`);
      }
    };
  }, []);

  return (
    <div>
      <h2>Counter: <span id="count">0</span></h2>
      <button id="btn">Increment</button>
    </div>
  );
};

export default Counter;

