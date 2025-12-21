import React from "react";
import Component3 from "./Component3";

export default function Component2() {
  return (
    <div>
      <h2>Component 2</h2>
      {/* No props — no context used here */}
      <Component3 />
    </div>
  );
}
