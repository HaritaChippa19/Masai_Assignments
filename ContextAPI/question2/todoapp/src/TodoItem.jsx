import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div style={{ marginBottom: "8px" }}>
      <span>{todo.title}</span>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
