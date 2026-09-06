import "../styles/AboutUs.css";
import aboutMain from "../assets/about-main.jpg";
import aboutMountain from "../assets/about-mountain.jpg";
import aboutSunset from "../assets/about-sunset.jpg";

import {
    FaCompass,
    FaShieldAlt,
    FaHeart,
    FaUsers,
    FaPlane
} from "react-icons/fa";

function AboutUs() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                <div className="about-content">

                    <div className="about-label">
                        <span>ABOUT US</span>
                        <div className="label-line"></div>
                    </div>

                    <h2>
                        About <span>TripPlanner</span>
                    </h2>

                    <div className="about-subtitle">
                        More Than Just a Trip — It's a New Story
                        <FaPlane />
                    </div>
                    <p>
                        TripPlanner is a smart travel booking platform created
                        to make travel planning easier and more convenient.
                        Our platform allows users to explore destinations,
                        view detailed travel information, create their wishlist,
                        and securely book their trips from one place.
                    </p>
                    <p>
                        We aim to provide a simple, user-friendly and secure
                        travel experience for every traveler.
                    </p>

                    <div className="about-features">

                        <div className="about-feature">
                            <div className="feature-icon">
                                <FaCompass />
                            </div>
                            <div>
                                <h3>Explore</h3>
                                <p>
                                    Discover amazing destinations worldwide.
                                </p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="feature-icon">
                                <FaShieldAlt />
                            </div>

                            <div>
                                <h3>Book Securely</h3>
                                <p>
                                    Your data and payments are always safe.
                                </p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="feature-icon">
                                <FaHeart />
                            </div>
                            <div>
                                <h3>Save & Plan</h3>
                                <p>
                                    Keep your favorite trips in one place.
                                </p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="feature-icon">
                                <FaUsers />
                            </div>
                            <div>
                                <h3>Travel Together</h3>
                                <p>
                                    Better experiences with your loved ones.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="about-visual">

    <div className="about-image-wrapper">

        <img
            src={aboutMain}
            alt="TripPlanner travel"
            className="about-main-image"
        />

        <img
            src={aboutMountain}
            alt="Mountain destination"
            className="about-small-image about-mountain"
        />

        <img
            src={aboutSunset}
            alt="Sunset destination"
            className="about-small-image about-sunset"
        />

    </div>

</div>
            </div>
        </section>
    );
}

export default AboutUs;