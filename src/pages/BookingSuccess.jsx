import { useLocation, useNavigate } from "react-router-dom";
import { destinations } from "../data/destinations";

function BookingSuccess() {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        destinationId,
        travelers,
        total,
        transactionId,
        bookingId,
    } = location.state || {};

    const destination = destinations.find(
        (item) => item.id === destinationId
    );

    if (!destination) {
        return (
            <div>
                <h2>Booking details not found.</h2>
                <button onClick={() => navigate("/")}>
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <div className="booking-success">
            <h1>✓ Payment Successful</h1>

            <h2>{destination.name}</h2>

            <p>Travelers: {travelers}</p>
            <p>Duration: {destination.duration}</p>
            <p>
                Total Paid: ₹{Number(total || 0).toLocaleString()}
            </p>

            <p>Booking ID: {bookingId || "Generating..."}</p>
            <p>Transaction ID: {transactionId || "Generating..."}</p>

            <button onClick={() => navigate("/")}>
                Back to Home
            </button>
        </div>
    );
}

export default BookingSuccess;