import {
  FaGlobeAsia,
  FaHotel,
  FaPlaneDeparture,
  FaStar,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="Why-Choose">
      <h2>Trusted by Thousands</h2>

      <div className="Why-container">

        <div className="Why-card">
          <FaGlobeAsia className="why-icon" />
          <h3>5000+</h3>
          <p>Happy Travelers</p>
        </div>

        <div className="Why-card">
          <FaHotel className="why-icon" />
          <h3>300+</h3>
          <p>Hotels</p>
        </div>

        <div className="Why-card">
          <FaPlaneDeparture className="why-icon" />
          <h3>120+</h3>
          <p>Destinations</p>
        </div>

        <div className="Why-card">
          <FaStar className="why-icon" />
          <h3>4.9</h3>
          <p>Average Rating</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;