import React from "react";

const TodoCard = ({ userId, title, completed }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p>
        <strong>Status:</strong> {completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
};

export default TodoCard;
