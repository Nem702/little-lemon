import React from "react";
import "./header.css"
import HeaderImg from "./assets/restauranfood.jpg"
const Header = () => {
  return (
    <header className="headerWrapper">
      <div className="headerLeft">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, corrupti voluptatibus voluptatum est quidem repellendus ducimus eligendi aliquid inventore sunt vitae praesentium aperiam dolor doloremque dolore excepturi temporibus, nobis totam.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="headerRight">
        <img src={HeaderImg} alt="Restaurant"></img>
      </div>
    </header>
  )
};

export default Header;
