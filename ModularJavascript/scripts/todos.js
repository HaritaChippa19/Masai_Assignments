let check = localStorage.getItem("isLoggedIn");
if (!check) {
  alert("Please login first");
  window.location.href = "login.html";
}

import { displayTodos } from "./displayTodos.js";

async function fetchTodos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await res.json();

  displayTodos(data.slice(0, 20));
}

fetchTodos();
