import { useParams } from "react-router-dom";
import { destinations } from "../data/destinations";
import "../styles/Booking.css";
import {Link} from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";


function Booking(){
    const {id}  = useParams();

    const destination = destinations.find((item) => item.id === id);

    return(
        <div className="booking-page">

            <Link to={`/destination/${destination.id}`} className="back-btn">
                <IoArrowBack />
            </Link>

        
            <h1>Book Your Trip</h1>

            <div className="booking-container">

                <div className="booking-left">
                <h2>{destination.name}</h2>

                <img
                    src={destination.image}
                    alt={destination.name}
                    className="booking-image"
                    />

                    <p className="booking-location"> India</p>

                    <p className="booking-description">
                        {destination.description}
                    </p>
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
                        defaultValue="1"
                        />

                    <div className="trip-info">
                        <p> {destination.price}</p>

                        <p> {destination.duration} </p>

                        <p>{destination.rating}</p>

                        <p>{destination.bestTime}</p>


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