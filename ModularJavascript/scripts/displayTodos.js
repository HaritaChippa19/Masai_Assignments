export function displayTodos(data) {
  let container = document.getElementById("todosContainer");
  container.innerHTML = "";

  data.forEach((todo) => {
    let card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.borderRadius = "6px";

    card.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
    `;

    container.appendChild(card);
  });
}
