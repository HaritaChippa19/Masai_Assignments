import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {todos.map((todo) => (
          <Link
            key={todo.id}
            to={`/todos/${todo.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "8px",
                background: "#f7f7f7"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
