import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const performAction = () => {
    if (num1 === "" || num2 === "") return;

    const a = Number(num1);
    const b = Number(num2);
    let result;

    if (operation === "add") {
      result = a + b;
    } else if (operation === "subtract") {
      result = a - b;
    } else if (operation === "multiply") {
      result = a * b;
    }

    // Append new result (keep old results)
    setResults([...results, result]);
  };

  return (
    <>
      <h2>Basic Calculator</h2>

      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <br /><br />

      <button onClick={performAction}>
        Perform Action
      </button>

      <h3>Results:</h3>
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Calculator;
