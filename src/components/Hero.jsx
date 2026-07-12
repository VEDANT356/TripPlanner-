import heroImg from "../assets/header.png";
import heroBg from "../assets/home-bg.png";
import Packages from "../components/Packages";

function Hero() {
    return(
        <section
            className="hero"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
        }}
        >
            <div className="hero-content">
            <p>Plan Your Perfect Journey </p>

            <h1>Explore The World
                <br />
                With TripPlanner
            </h1>

            <p className="hero-subtitle">
                Discover 120+ destination with personalized travel planning.
                Secure bookings, and unforgettabel experiences.
            </p>

            <button> Book A Trip Now</button>
            </div>

            
            
        </section>
    );
}

export default Hero;