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

            <div className="booking-card">
                <h2>{destination.name}</h2>

                <img
                    src={destination.image}
                    alt={destination.name}
                    />

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
                    </div>

                    <button type="submit" className="confirm-btn">
                        Confirm Booking
                    </button>
                </form>
            </div>
            
        </div>
    );
}

export default Booking; 