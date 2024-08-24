import React, { useState } from "react";
import "./bookingPage.css";

const BookingForm = () => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  // const handleChange = (e) => {
  //   const [name, value] = e.target;

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log({
      resDate,
      resTime,
      guests,
      occasion
    })
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          value={resDate}
          onChange={(e) => {
            setResDate(e.target.value);
          }}
          type="date"
          id="res-date"
        ></input>
        <label htmlFor="res-time">Choose time</label>
        <select
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
          id="res-time "
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        ></input>
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"></input>
      </form>
    </div>
  );
};
export default BookingForm;
