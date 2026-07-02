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
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#destinations">Destinations</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <p>📍 Mumbai, India</p>
                    <p>📞 +91 1234567890</p>
                    <p>✉ info@tripplanner.com</p>
                </div>

                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                <p>&copy; 2026 TripPlanner. All rights reserved.</p>
                <p>Designed & Developed by Vedant Kotkar</p>
                </div>
                </div>
        </footer>
    );
}

export default Footer;