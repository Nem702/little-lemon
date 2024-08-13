import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import "./nav.css";
import {ReactComponent as Logo} from "./assets/Logo .svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="Logo">
        <Logo />
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/menu">Menu</CustomLink>
        <CustomLink to="/reservations">Reservations</CustomLink>
        <CustomLink to="/orderOnline">Order Online</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Nav;
