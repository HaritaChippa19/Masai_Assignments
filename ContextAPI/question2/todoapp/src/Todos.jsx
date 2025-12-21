import React, { useState } from "react";
import { TodoContext } from "./TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  // Add Todo function
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos([...todos, newTodo]);
  };

  // Delete Todo function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <div style={{ margin: "20px" }}>
        <h2>Todo Application (Context API)</h2>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}
