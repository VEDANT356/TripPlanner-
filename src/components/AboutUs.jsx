import "../styles/AboutUs.css";

function AboutUs() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                <div className="about-content">
                    <p className="about-tag">ABOUT US</p>

                    <h2>About TripPlanner</h2>

                    <p>
                        TripPlanner is a smart travel booking platform created
                        to make travel planning easier and more convenient.
                    </p>

                    <p>
                        Our platform allows users to explore destinations,
                        view detailed travel information, create their wishlist,
                        and securely book their trips from one place.
                    </p>

                    <p>
                        We aim to provide a simple, user-friendly and secure
                        travel experience for every traveler.
                    </p>

                    <div className="about-features">
                        <div>
                            <h3>Easy Planning</h3>
                            <p>Plan your journey with ease.</p>
                        </div>

                        <div>
                            <h3>Secure Booking</h3>
                            <p>Safe and reliable booking experience.</p>
                        </div>

                        <div>
                            <h3>Smart Travel</h3>
                            <p>Make better travel decisions.</p>
                        </div>
                    </div>
                </div>

                <div className="about-box">
                    <h3>Travel Made Simple</h3>
                    <p>Discover. Plan. Book. Enjoy.</p>
                    <span>🌍</span>
                </div>

            </div>
        </section>
    );
}

export default AboutUs;