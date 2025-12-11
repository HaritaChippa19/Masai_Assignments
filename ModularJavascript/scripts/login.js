const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  let saved = JSON.parse(localStorage.getItem("user"));

  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (saved && saved.email === email && saved.password === pass) {
    alert("Login successful");

    localStorage.setItem("isLoggedIn", true);

    window.location.href = "todos.html";
  } else {
    alert("Invalid Credentials");
  }
});
