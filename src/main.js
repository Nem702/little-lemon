import React from "react";
import GreekSalad from "./Figma---Assets/icons_assets/greek salad.jpg";
import "./main.css";
import { Link } from "react-router-dom";
import OrderOnline from "./OrderOnline";

const Main = () => {
  return (
    <main>
      <div className="specialsContainer">
        <h2>Specials</h2>
        <Link className="link" to="/menu">Online Menu</Link>
      </div>
        <div className="cardsContainer">
          <div className="card">
            <img className="cardImg" src={GreekSalad} alt="greek salad"></img>
            <div className="titleNprice">
              <h4>Greek Salad</h4>
              <p className="price">$5.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <Link className="orderDelivery" to="/orderOnline">Order Delivery</Link>
          </div>
          <div className="card">
            <img className="cardImg" src={GreekSalad} alt="greek salad"></img>
            <div className="titleNprice">
              <h4>Greek Salad</h4>
              <p className="price">$5.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <Link className="orderDelivery" to="/orderOnline">Order Delivery</Link>
          </div>
          <div className="card">
            <img className="cardImg" src={GreekSalad} alt="greek salad"></img>
            <div className="titleNprice">
              <h4>Greek Salad</h4>
              <p className="price">$5.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <Link className="orderDelivery" to="/orderOnline">Order Delivery</Link>
          </div>
        </div>
      
    </main>
  );
};

export default Main;
