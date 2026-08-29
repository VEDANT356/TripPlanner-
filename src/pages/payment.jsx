import { useLocation, useNavigate } from "react-router-dom";
import { destinations } from "../data/destinations";
import {
    FaUser,
    FaCheckCircle,
    FaRupeeSign,
    FaClock,
    FaArrowLeft,
} from "react-icons/fa";

import "../styles/Payment.css";

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();

    const { destinationId, travelers, total } = location.state || {};


    const destination = destinations.find(
        (item) => item.id === destinationId
    );


    if (!destinationId || !destination) {
        return (
            <div className="payment-page">
                <div className="error-card">
                    <h2>Booking details not found.</h2>

                    <button onClick={() => navigate("/")}>
                        Go Home
                    </button>
                </div>
            </div>
        );
    }


 const handlePayment = async () => {
    try {
        const response = await fetch(
            "https://tripplanner-gqth.onrender.com/api/payment/order",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: Number(total),
                }),
            }
        );

        const order = await response.json();

        console.log("Razorpay Order:", order);

        if (!response.ok) {
            throw new Error(order.message || "Order creation failed");
        }

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,

            amount: order.amount,
            currency: order.currency,

            name: "TripPlanner",
            description: `Booking for ${destination.name}`,

            order_id: order.id,

            handler: function (paymentResponse) {
                console.log("Payment Successful:", paymentResponse);

                navigate("/booking-success", {
                    state: {
                        destinationId: destination.id,
                        travelers,
                        total,
                        paymentId: paymentResponse.razorpay_payment_id,
                    },
                });
            },

            theme: {
                color: "#2563eb",
            },
        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();

    } catch (error) {
        console.error("Payment Error:", error);
    }
};

    return (
        <div className="payment-page">
            <div className="payment-card">
                <div className="payment-header">
                    <div className="payment-icon">
                        <FaCheckCircle />
                    </div>
                    <div>
                        <h1>Review Your Booking</h1>
                        <p>
                            Check your trip details before payment
                        </p>
                    </div>
                </div>

                <img
                    src={destination.image}
                    alt={destination.name}
                    className="payment-image"
                />


                <div className="destination-info">

                    <h2>{destination.name}</h2>

                    <p>
                        Your selected trip details are shown below.
                    </p>

                </div>

                <div className="payment-detail-row">

                    <span>
                        <FaUser />
                        Travelers
                    </span>

                    <strong>
                        {travelers}
                    </strong>

                </div>



                <div className="payment-details">

                    <span>
                        <FaRupeeSign />
                        Trip Price
                    </span>

                    <strong>
                        {destination.price}
                    </strong>

                </div>



                <div className="payment-details">

                    <span>
                        <FaClock />
                        Duration
                    </span>

                    <strong>
                        {destination.duration}
                    </strong>

                </div>


                <div className="payment-total">

                    <span>
                        Total Amount
                    </span>

                    <strong>
                        ₹{Number(total || 0).toLocaleString()}
                    </strong>

                </div>



                <button
                    className="pay-btn"
                    onClick={handlePayment}
                >
                    <FaRupeeSign />
                    Pay Now
                </button>



                <button
                    className="cancel-btn"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft />
                        Back to Booking
                </button>

            </div>

        </div>
    );
}

export default Payment;
