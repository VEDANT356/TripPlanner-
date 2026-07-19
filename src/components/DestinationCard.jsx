import { Link } from "react-router-dom";

function DestinationCard ({id, image, title, location,price,rating}){
    return (
        <div className="destination-card">
            <div className="destination-image">
            <img src={image} alt={title} />
            </div>
            <div className="destination-info">
            <h3>{title}</h3>

            <p>{location}</p>
            
            <div className="destination-bottom">
                <span className="price">
                    {price}
                </span>

                <span className="rating">
                    ⭐{rating}
                </span>
                </div>
            <Link to={`/destination/${title.toLowerCase()}`}>
            <button>Book Now</button>
            </Link>
            </div>
        </div>
    );
}

export default DestinationCard;