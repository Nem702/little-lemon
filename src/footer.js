import React from "react";
import { Link } from "react-router-dom";

import Restaurant from "./Figma---Assets/icons_assets/restaurant.jpg";
const Footer = () => {
  return (
    <footer>
      <img className="footerImg" src={Restaurant} alt="chef"></img>
      <div className="dormantNavigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/orderOnline">Order Online</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="contact">
        <p>Address: 1234 Random address, City</p>
        <p>Phone: 123 - 345 - 5678</p>
        <p>E-mail: random@email.com</p>
      </div>
      <div className="socialMediaLinks">
        <Link to="/facebook.com">Facebook</Link>
        <Link to="/facebook.com">Facebook</Link>
        <Link to="/facebook.com">Facebook</Link>
        <Link to="/facebook.com">Facebook</Link>
      </div>
    </footer>
  );
};

export default Footer;
