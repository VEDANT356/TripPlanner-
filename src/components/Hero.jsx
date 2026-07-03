import heroImg from "../assets/header.png";
import heroBg from "../assets/header-bg.jpg";
import Packages from "../components/Packages";

function Hero() {
    return(
        <section className="hero">

            <div className="hero-content">
            <p>Plan Your Perfect Journey </p>

            <h1>Explore The World
                <br />
                With TripPlanner
            </h1>

            <button> Book A Trip Now</button>
            </div>

            <div className="hero-image">
                <img src={heroImg} alt="Plane" />
            </div>
            
        </section>
    );
}

export default Hero;