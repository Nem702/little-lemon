import React from "react";
import MarioAndAdrian from "./Figma---Assets/icons_assets/Mario and Adrian A.jpg"
import "./testimonials.css"

const Testimonials = () => {
    return(
        <div className="testimonialsWarapper">
            <div className="ratingCard">
                <h4>Rating</h4>
                <h4>Name</h4>
                <img className="TestimonialsImg" src={MarioAndAdrian} alt="mario and adrian"></img>
                <p>Review text</p>
            </div>
            <div className="ratingCard">
                <h4>Rating</h4>
                <h4>Name</h4>
                <img className="TestimonialsImg" src={MarioAndAdrian} alt="mario and adrian"></img>
                <p>Review text</p>
            </div>
            <div className="ratingCard">
                <h4>Rating</h4>
                <h4>Name</h4>
                <img className="TestimonialsImg" src={MarioAndAdrian} alt="mario and adrian"></img>
                <p>Review text</p>
            </div>
            <div className="ratingCard">
                <h4>Rating</h4>
                <h4>Name</h4>
                <img className="TestimonialsImg" src={MarioAndAdrian} alt="mario and adrian"></img>
                <p>Review text</p>
            </div>
        </div>
    )
}

export default Testimonials;