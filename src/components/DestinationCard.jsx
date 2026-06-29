function DestinationCard ({ image, title, location}) {
    return (
        <div className="destination-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{location}</p>
            <button>View Details</button>
        </div>
    );
}

export default DestinationCard;