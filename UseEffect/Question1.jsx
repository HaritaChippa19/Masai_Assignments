import React, { useEffect } from "react";

const UserData = () => {
  useEffect(() => {
    const container = document.getElementById("user-data");
    container.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) => {
        container.innerHTML = `
          <h2>User Data</h2>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
        `;
      })
      .catch(() => {
        container.innerHTML = "Error loading data";
      });
  }, []);

  return <div id="user-data"></div>;
};

export default UserData;

