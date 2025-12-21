import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TodoDetails() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo Details</h2>

      <h3>ID: {todo.id}</h3>
      <h4>Title: {todo.title}</h4>
      <h4>
        Status:{" "}
        <span style={{ color: todo.completed ? "green" : "red" }}>
          {todo.completed ? "Completed" : "Not Completed"}
        </span>
      </h4>
    </div>
  );
}
