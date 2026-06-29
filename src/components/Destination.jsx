import DestinationCard from "./DestinationCard";
import destination1 from "../assets/destination-1.jpg";
import destination2 from "../assets/destination-2.jpg";
import destination3 from "../assets/destination-3.jpg";

function Destination() {
    return(
        <section className="destination">
            
            <h2>Popular Destination</h2>

            <div className="destination-container">

            <DestinationCard
            image={destination1}
            title="Goa"
            location="India"
            />

            <DestinationCard
            image={destination2}
            title="Manali"
            location="Himachal Pradesh"
            />

            <DestinationCard
            image={destination3}
            title="jaipur"
            location="India"
            />

            </div>
        </section>
    );
}

export default Destination;