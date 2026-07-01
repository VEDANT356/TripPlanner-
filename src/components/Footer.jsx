import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">
                <div className="footer-col">
                    <h2>TripPlanner</h2>
                    <p>Explore the world with comfort and unforgettable travel experiences.</p>
                </div>
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <p>📍 Mumbai, India</p>
                    <p>📞 +91 1234567890</p>
                    <p>✉ info@tripplanner.com</p>
                </div>
                </div>

                <p>&copy;©  2026 TripPlanner. All rights reserved.</p>
        </footer>
    );
}

export default Footer;