import heroImg from "../assets/header.png";

function Hero() {
    return(
        <section className="hero">
            <div className="hero-content">
            <p>Plan your perfect trip with us.</p>

            <h1>Explore The World With TripPlanner</h1>

            <button> Book A Trip Now</button>
            </div>

            <div className="hero-image">
                <img src={heroImg} alt="Plane" />
            </div>
        </section>
    );
}

export default Hero;