import React, { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todos</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <h4>{todo.title}</h4>
            <p>
              Status:{" "}
              <strong style={{ color: todo.completed ? "green" : "red" }}>
                {todo.completed ? "Completed" : "Not Completed"}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
