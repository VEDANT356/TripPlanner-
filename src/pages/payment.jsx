import { useLocation } from "react-router-dom";
import { destinations } from "../data/destinations";

function Payment() {
    const location = useLocation();

    const { destinationId, travelers, total } = location.state || {};

    const destination = destinations.find(
        (item) => item.id === destinationId
    );

    return (
        <div className="payment-page">

            <h1>Payment</h1>

        <div className="payment-card">

            <h2>{destination?.name || "Your Trip"}</h2>

            <p>
                Travelers: {travelers || 1}
            </p>

            <h3>
                Total Amount: {total?.toLocaleString() || 0} Rs /-
            </h3>

            <button className="pay-btn">
                Pay Now
            </button>

        </div>

    </div>
    );
}

export default Payment;