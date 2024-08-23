import React, { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "./bookingPage.css";

const BookingPage = () => {
  const [resDate, setResDate] = useState("")
  const [resTime, setResTime] = useState("")
  const [guests, setGuests] = useState("")
  const [occasion, setOccasion] = useState("occasion")


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  }

  return (
    <div>
      <Nav />
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input value={resDate} onChange={(e) => {
            setResDate(e.target.value);
          }} type="date" id="res-date"></input>
          <label htmlFor="res-time">Choose time</label>
          <select value={resTime} onChange={(e) => setResTime(e.target.value)} id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            value={guests} onChange={(e) => setGuests(e.target.value)}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
          ></input>
          <label htmlFor="occasion">Occasion</label>
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)} id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation"></input>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
