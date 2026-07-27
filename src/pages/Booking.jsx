import { useParams } from "react-router-dom";
import { destinations } from "../data/destinations";
import "../styles/Booking.css";
import {Link} from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaStar} from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaShieldHalved, FaBoltLightning ,FaHeadset } from "react-icons/fa6";


function Booking(){
    const {id}  = useParams();

    const destination = destinations.find((item) => item.id === id);

    const [travelers, setTravelers] = useState(1);

    const price = parseInt(destination.price.replace(/[^\d]/g, "")
    );

    const total =
    price * travelers;

    const [liked,setLiked] =useState(false);

    return(
        <div className="booking-page">

            <Link to={`/destination/${destination.id}`} className="back-btn">
                <IoArrowBack />
            </Link>

        
            <h1>Book Your Trip</h1>

            <div className="booking-container">

                <div className="booking-left">

    <div className="hero-image">
        <img
            src={destination.image}
            alt={destination.name}
            className="booking-image"
        />

        <button
            className={`wishlist-btn ${liked ? "active" : ""}`}
            onclick={() => setLiked(!liked)}
        >
            <FaHeart />
            Wishlist
        </button>

        <div className="hero-overlay">
            <h2>{destination.name}</h2>

            <p className="overlay-location">
                <FaMapMarkedAlt />
                Goa, India
            </p>

            <p className="overlay-rating">
                <FaStar />
                {destination.rating} (342 Reviews)
            </p>
        </div>

    </div>

    <p className="booking-location">
        India
    </p>

    <p className="booking-description">
        {destination.description}
    </p>

    <div className="booking-features">

        <div className="feature-card">
            <FaShieldHalved className ="feature-icon" />
            Secure Booking
            <span>Your data is safe</span>
        </div>

        <div className="feature-card">
            <FaBoltLightning className="feature-icon" />
            Instant Confirmation
            <span>Quick Booking Process</span>
        </div>

        <div className="feature-card">
            <FaHeadset className="feature-icon" />
            24/7 Support
            <span>Always here to help</span>
        </div>
    </div>
</div>

                <div className="booking-right">

                    <h2>Booking Details</h2>
                    <form className="booking-form">
                    <div className="input-group">
                        <label>FUll Name</label>
                        <input
                        type="text"
                        placeholder="Enter your Full name"/>
                        </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                        type="email"
                        placeholder="Enter your email"/>
                    </div>
                    <div className="input-group">
                        <label>Phone Number</label>
                        <input
                        type="tel"
                        placeholder="Enter your phone number"/>
                    </div>

                    <div className="input-group">
                        <label>Travel Date</label>
                        <input
                        type="date"/>
                    </div>

                    <div className="input-group">
                        <label>Number of Travelers</label>
                        <input
                        type="number"
                        min="1"
                        value={travelers}
                        onChange={(e) =>
                            setTravelers(Number(e.target.value))
                        }
                        />

                    </div>

                    <div className="trip-info">

                        <div className="trip-card">
                            <h4> <FaRupeeSign /> Starting Price</h4>
                            <p> {destination.price}</p>
                        </div>

                        <div className="trip-card">
                            <h4> <FaCalendarAlt /> Duration</h4>
                            <p> {destination.duration} </p>
                        </div>

                        <div className="trip-card">
                            <h4> <FaStar /> Rating</h4>
                            <p>{destination.rating}</p>
                        </div>

                        <div className="trip-card">
                            <h4> <FaSun /> Best Time </h4>
                            <p>{destination.bestTime}</p>
                        </div>

                    </div>
                        
                    <div className="booking-summary">

                        <div className="summary-row">
                            <span>Trip Price</span>
                            <span>{destination.price}</span>
                        </div>
                        <div className="summary-row">
                            <span> Travelers</span>
                            <span>{travelers}</span>
                        </div>

                        <hr />

                        <div className="summary-total">
                            <span>Total Amount</span>
                            <span> {total.toLocaleString()} RS/-</span>
                        </div>

                    </div>

                    <button type="submit" className="confirm-btn">
                        Confirm Booking
                    </button>
                </form>
                </div>
            </div>
            
        </div>
    );
}

export default Booking;