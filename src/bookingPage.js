import React from "react";
import Nav from "./nav";
import BookingForm from "./form";
import Footer from "./footer";
import "./bookingPage.css";

const BookingPage = () => {
  return (
    <div>
      <Nav />
      <BookingForm/>
      <Footer />
    </div>
  );
};

export default BookingPage;
