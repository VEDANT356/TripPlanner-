import DestinationCard from "./DestinationCard";
import destination1 from "../assets/destination-1.jpg";
import destination2 from "../assets/destination-2.jpg";
import destination3 from "../assets/destination-3.jpg";
import destination4 from "../assets/destination-4.jpg";
import destination5 from "../assets/destination-5.jpg";
import destination6 from "../assets/destination-6.jpg";

function Destination() {
    return(
        <section id="destinations" className="destination">
            
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

            <DestinationCard 
            id="kashmir"
            image={destination4}
            title="Kashmir"
            location="Jammu & Kashmir"
            price="21,999/-Rs"
            rating="4.9"
            />

            <DestinationCard 
            id="kerala"
            image={destination5}
            title="Kerala"
            location="India"
            price="18,999/-Rs"
            rating="4.8"
            />

            <DestinationCard 
            id="ladakh"
            image={destination6}
            title="Ladakh"
            location="India"
            price="22,999/-Rs"
            rating="4.9"
            />

            </div>
        </section>
    );
}

export default Destination;