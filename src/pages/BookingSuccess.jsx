import { useLocation, useNavigate } from "react-router-dom";
import { destinations } from "../data/destinations";
import "../styles/BookingSuccess.css";

function BookingSuccess() {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        destinationId,
        travelers,
        total,
        paymentId,
    } = location.state || {};

    const destination = destinations.find(
        (item) => item.id === destinationId
    );

    if (!destination) {
        return (
            <div className="booking-error">
                <h2>Booking details not found.</h2>

                <button onClick={() => navigate("/")}>
                    Go Home
                </button>
            </div>
        );
    }
    const bookingId = `TRP-${Date.now().toString().slice(-8)}`;

    const paymentDate = new Date().toLocaleDateString("en-IN");

    const paymentTime = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="receipt-page">

            <div className="receipt-card">

                <div className="receipt-header">

                    <div className="success-icon">
                        ✓
                    </div>
                    <h1>
                        Payment Successful
                    </h1>
                    <p>
                        Your booking has been confirmed!
                    </p>
                </div>

                <div className="receipt-brand">

                    <h2>
                        TripPlanner
                    </h2>

                    <span>
                        Travel Smarter. Explore Further.
                    </span>

                </div>


                <div className="receipt-divider"></div>

                <div className="receipt-section">

                    <h3>
                        Booking Details
                    </h3>


                    <div className="receipt-row">

                        <span>
                            Destination
                        </span>

                        <strong>
                            {destination.name}
                        </strong>

                    </div>


                    <div className="receipt-row">

                        <span>
                            Travelers
                        </span>

                        <strong>
                            {travelers}
                        </strong>

                    </div>


                    <div className="receipt-row">

                        <span>
                            Duration
                        </span>

                        <strong>
                            {destination.duration}
                        </strong>

                    </div>

                </div>


                <div className="receipt-divider"></div>

                <div className="receipt-section">

                    <h3>
                        Payment Details
                    </h3>


                    <div className="receipt-row">

                        <span>
                            Amount Paid
                        </span>

                        <strong className="amount">

                            ₹
                            {Number(total || 0).toLocaleString(
                                "en-IN"
                            )}

                        </strong>

                    </div>


                    <div className="receipt-row">

                        <span>
                            Payment Status
                        </span>

                        <strong className="paid">
                            Paid ✓
                        </strong>

                    </div>


                    <div className="receipt-row">

                        <span>
                            Payment Method
                        </span>

                        <strong>
                            Online Payment
                        </strong>

                    </div>

                </div>


                <div className="receipt-divider"></div>

                <div className="receipt-section">

                    <h3>
                        Transaction Details
                    </h3>

                    <div className="receipt-row">

                        <span>
                            Booking ID
                        </span>

                        <strong>
                            {bookingId}
                        </strong>

                    </div>

                    <div className="receipt-row">

                        <span>
                            Transaction ID
                        </span>

                        <strong>
                            {paymentId || "Payment ID unavailable"}
                        </strong>

                    </div>

                    <div className="receipt-row">

                        <span>
                            Date
                        </span>

                        <strong>
                            {paymentDate}
                        </strong>

                    </div>

                    <div className="receipt-row">

                        <span>
                            Time
                        </span>

                        <strong>
                            {paymentTime}
                        </strong>

                    </div>

                </div>

                <div className="receipt-footer">

                    <p>
                        Thank you for booking with TripPlanner! 🌍
                    </p>
                    <span>
                        This is a computer-generated payment receipt.
                    </span>
                </div>

                <div className="receipt-actions">

                    <button
                        className="print-btn"
                        onClick={handlePrint}
                    >
                        🖨 Print Receipt
                    </button>


                    <button
                        className="home-btn"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>

                </div>

            </div>

        </div>
    );
}

export default BookingSuccess;