import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
        <Link to="/" className="logo-link">
            TripPlanner
            </Link>
        </div>

        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Packages</Link></li>
            <li><Link to="/">Destination</Link></li>
            <li><Link to="/">Contacts</Link></li>
        </ul>

        <Link to="/login" className="login-btn">
            <img src={userIcon} alt="user" />
            Login
        </Link>

    </nav>
  );
}

export default Navbar;