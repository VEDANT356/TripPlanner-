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
            id="goa"
            image={destination1}
            title="Goa"
            location="India"
            price="14,999/-Rs"
            rating="4.8"
            />

            <DestinationCard
            id="manali"
            image={destination2}
            title="Manali"
            location="Himachal Pradesh"
            price="17,999/-Rs"
            rating="4.9"
            />

            <DestinationCard
            id="jaipur"
            image={destination3}
            title="Jaipur"
            location="India"
            price="12,999/-Rs"
            rating="4.7"
            />

            </div>
        </section>
    );
}

export default Destination;