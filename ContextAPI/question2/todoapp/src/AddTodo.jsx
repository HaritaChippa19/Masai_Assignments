import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;

    addTodo(title);
    setTitle("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
