import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {FaArrowLeft,FaCalendarAlt,FaClock,FaUser,FaRupeeSign,FaReceipt,FaCheckCircle,} from "react-icons/fa";
import "../styles/BookingHistory.css";

function BookingHistory() {
    const navigate = useNavigate();

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                navigate("/login");
                return;
            }

            try {
                const bookingsRef = collection(
                    db,
                    "users",
                    user.uid,
                    "bookings"
                );

                const bookingsQuery = query(
                    bookingsRef,
                    orderBy("date", "desc")
                );

                const snapshot = await getDocs(bookingsQuery);

                const bookingList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setBookings(bookingList);
            } catch (error) {
                console.error(
                    "Error fetching booking history:",
                    error
                );
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleViewReceipt = (booking) => {
        navigate("/booking-success", {
            state: {
                destinationId: booking.destinationId,
                travelers: booking.travelers,
                total: booking.total,
                paymentId: booking.transactionId,
            },
        });
    };

    if (loading) {
        return (
            <div className="booking-history-page">
                <div className="history-loading">
                    <h2>Loading Booking History...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-history-page">

            <div className="booking-history-container">

                <button
                    className="history-back-btn"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft />
                    Back
                </button>

                <div className="history-header">
                    <div>
                        <h1>Booking History</h1>
                        <p>
                            View all your previous TripPlanner bookings.
                        </p>
                    </div>

                    <div className="booking-count">
                        {bookings.length}{" "}
                        {bookings.length === 1
                            ? "Booking"
                            : "Bookings"}
                    </div>
                </div>

                {bookings.length === 0 ? (

                    <div className="no-bookings">

                        <div className="no-bookings-icon">
                            <FaReceipt />
                        </div>

                        <h2>No Bookings Yet</h2>

                        <p>
                            You haven't made any bookings yet.
                            Start exploring destinations and book
                            your next trip!
                        </p>

                        <button
                            onClick={() => navigate("/")}
                        >
                            Explore Destinations
                        </button>

                    </div>

                ) : (

                    <div className="booking-list">

                        {bookings.map((booking) => (

                            <div
                                className="history-card"
                                key={booking.id}
                            >

                                <div className="history-image-container">

                                    <img
                                        src={booking.destinationImage}
                                        alt={booking.destinationName}
                                        className="history-image"
                                    />

                                    <span className="confirmed-badge">
                                        <FaCheckCircle />
                                        {booking.status || "Confirmed"}
                                    </span>

                                </div>

                                <div className="history-content">

                                    <div className="history-title">

                                        <h2>
                                            {booking.destinationName}
                                        </h2>

                                        <span className="booking-id">
                                            {booking.bookingId}
                                        </span>

                                    </div>

                                    <div className="history-details">

                                        <div className="history-detail">
                                            <FaUser />
                                            <span>
                                                <small>Travelers</small>
                                                {booking.travelers}
                                            </span>
                                        </div>

                                        <div className="history-detail">
                                            <FaClock />
                                            <span>
                                                <small>Duration</small>
                                                {booking.duration}
                                            </span>
                                        </div>

                                        <div className="history-detail">
                                            <FaCalendarAlt />
                                            <span>
                                                <small>Booking Date</small>
                                                {booking.date
                                                    ? new Date(
                                                        booking.date
                                                    ).toLocaleDateString(
                                                        "en-IN"
                                                    )
                                                    : "N/A"}
                                            </span>
                                        </div>

                                        <div className="history-detail amount-detail">
                                            <FaRupeeSign />
                                            <span>
                                                <small>Total Paid</small>
                                                ₹
                                                {Number(
                                                    booking.total || 0
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}
                                            </span>
                                        </div>

                                    </div>

                                    <div className="history-footer">

                                        <div className="transaction-info">
                                            <span>
                                                Transaction ID
                                            </span>

                                            <strong>
                                                {booking.transactionId ||
                                                    "Unavailable"}
                                            </strong>
                                        </div>

                                        <button
                                            className="receipt-btn"
                                            onClick={() =>
                                                handleViewReceipt(
                                                    booking
                                                )
                                            }
                                        >
                                            <FaReceipt />
                                            View Receipt
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookingHistory;