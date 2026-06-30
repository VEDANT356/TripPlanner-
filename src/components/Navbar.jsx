import userIcon from "../assets/user.png";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            TripPlanner
        </div>

        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">Destination</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>

        <button className="login-btn">
            <img src={userIcon} alt="user" />
            Login
        </button>

    </nav>
  );
}

export default Navbar;