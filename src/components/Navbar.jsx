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
            <li><a href="#">Contact</a></li>
        </ul>

        <button className="login-btn">
            Login
        </button>

    </nav>
  );
}

export default Navbar;