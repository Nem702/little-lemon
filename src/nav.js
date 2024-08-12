import React from "react";
import "./nav.css"
import {ReactComponent as Logo} from "./assets/Logo .svg"

const Nav = () => {
  return (
    <nav className="Navbar">
      <Logo />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#onlineOrder">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
