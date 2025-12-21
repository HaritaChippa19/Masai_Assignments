import React from "react";
import { AppContext } from "./AppContext";
import Component2 from "./Component2";

export default function Component1() {
  const a = "Value of A";
  const b = "Value of B";
  const c = "Value of C";
  const d = "Value of D";
  const e = "Value of E";
  const f = "Value of F";

  return (
    <AppContext.Provider value={{ a, b, c, d, e, f }}>
      <div>
        <h2>Component 1</h2>

        <h4>This is prop a: {a}</h4>
        <h4>This is prop b: {b}</h4>
        <h4>This is prop c: {c}</h4>
        <h4>This is prop d: {d}</h4>
        <h4>This is prop e: {e}</h4>
        <h4>This is prop f: {f}</h4>

        {/* NO PROP PASSING */}
        <Component2 />
      </div>
    </AppContext.Provider>
  );
}
