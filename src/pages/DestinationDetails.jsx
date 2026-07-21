import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "../styles/DestinationDetails.css";
import { destinations } from "../data/destinations";


function DestinationDetails(){
    const {id} = useParams();
    const destination = destinations.find((item) => item.id === id);

    return(
        <div className="destination-page">
            <Link to="/" className="back-btn">
                <IoArrowBack />
            </Link>

            <div className="destination-hero">
                <img
                    src={destination.image}
                    alt={destination.name}
                />

                <h1>{destination.name}</h1>

            </div>

            <div className="gallery">
                {destination.gallery.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Gallery ${index +1}`}
                        className="gallery-img"
                        />
                ))}
            </div>
            <div className="destination-content">
                <h2> About {id}</h2>

                <p>
                    {destination.description}
                </p>

                <div className="info-grid">
                    <div>
                        <h3>Starting Price</h3>
                        <p>{destination.price}</p>
                    </div>

                    <div className="info-card">
                        <h3>Duration</h3>
                        <p>{destination.duration}</p>
                    </div>

                    <div className="info-card">
                        <h3>Best Time</h3>
                        <p>{destination.bestTime}</p>
                    </div>

                    <div className="info-card">
                        <h3> Rating </h3>
                        <p>{destination.rating}</p>
                    </div>
                </div>

                <h2>Top Attraction</h2>
                <ul className="attraction-list">
                {destination.attractions.map((place) => (
                <li key={place}>{place}</li>
                ))}
                </ul>

                <h2>Activities</h2>

                <ul className="activities-list">
                {destination.activities.map((activity) => (
                <li key={activity}>{activity}</li>
                ))}
                </ul>

                <Link to={`/booking/${destination.id}`}>
                <button className="book-btn">
                    Book Now
                </button>
                </Link>

            </div>
        </div>
    );
}
export default DestinationDetails;