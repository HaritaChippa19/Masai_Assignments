import React from "react";

export default function Component1() {
  const a = "Value of A";
  const b = "Value of B";
  const c = "Value of C";
  const d = "Value of D";
  const e = "Value of E";
  const f = "Value of F";

  return (
    <div>
      <h2>Component 1</h2>

      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <h4>This is prop e: {e}</h4>
      <h4>This is prop f: {f}</h4>

      {/* Passing all props to Component2 */}
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}


function Component2({ a, b, c, d, e, f }) {
  return (
    <div>
      <h2>Component 2</h2>

      {/* Component2 does NOT use props, only forwards them */}
      <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}


function Component3({ a, b, c, d, e, f }) {
  return (
    <div>
      <h2>Component 3</h2>

      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>

      <Component4 c={c} d={d} e={e} f={f} />
    </div>
  );
}


function Component4({ c, d, e, f }) {
  return (
    <div>
      <h2>Component 4</h2>

      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>

      <Component5 e={e} f={f} />
    </div>
  );
}


function Component5({ e, f }) {
  return (
    <div>
      <h2>Component 5</h2>

      <h4>This is prop f: {f}</h4>

      {/* Component5 does NOT use prop e but must forward it */}
      <Component6 e={e} />
    </div>
  );
}

-

function Component6({ e }) {
  return (
    <div>
      <h2>Component 6</h2>

      <h4>This is prop e: {e}</h4>
    </div>
  );
}
