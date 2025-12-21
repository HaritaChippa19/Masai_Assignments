import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#222",
        display: "flex",
        gap: "20px"
      }}
    >
      <NavLink
        to="/home"
        style={{ color: "white", textDecoration: "none" }}
      >
        Home
      </NavLink>

      <NavLink
        to="/aboutus"
        style={{ color: "white", textDecoration: "none" }}
      >
        About Us
      </NavLink>

      <NavLink
        to="/todos"
        style={{ color: "white", textDecoration: "none" }}
      >
        Todos
      </NavLink>
    </nav>
  );
}
