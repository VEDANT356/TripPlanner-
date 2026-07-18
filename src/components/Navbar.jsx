import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import  userIcon from "../assets/user.png";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaBars, FaTimes , FaChevronDown } from "react-icons/fa";

function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        setMenuOpen(false);
        toast.success("Logged out Successfully!");
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const [profileOpen, setProfileOpen] =useState(false);

    return (
    <nav className="navbar">
        <div className="logo">
        <Link to="/" className="logo-link">
            TripPlanner
            </Link>
        </div>

        <ul className="nav-links">
            <li><Link to="/">Home </Link></li>
            <li><Link to="/">Packages</Link></li>
            <li><Link to="/">Destination</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {menuOpen && (
    <div
        className="overlay"
        onClick={() => setMenuOpen(false)}
    ></div>
)}

<div className={`sidebar ${menuOpen ? "active" : ""}`}>

    <div className="sidebar-header">
        <FaTimes onClick={() => setMenuOpen(false)} />
    </div>

    <div className="sidebar-profile">
        <img src={userIcon} alt="User" />

        <h3>{user?.displayName}</h3>

        <p>{user?.email }</p>
    </div>

    <hr />

    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

    <Link to="/" onClick={() => setMenuOpen(false)}>Packages</Link>

    <Link to="/" onClick={() => setMenuOpen(false)}>Destination</Link>

    <Link to="/" onClick={() => setMenuOpen(false)}>Contact</Link>

    <Link to="/" onClick={() => setMenuOpen(false)}>Wishlist</Link>

    <Link to="/" onClick={() => setMenuOpen(false)}>Booking History</Link>

    <hr />

    {user ? (
        <button onClick={handleLogout}>
            Logout
        </button>
    ) : (
        <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
        >
            Login
        </Link>
    )}

</div>

        {user ? (
    <div className="profile-menu">

        <div
            className="profile-btn"
            onClick={() => setProfileOpen(!profileOpen)}
        >
            <img src={userIcon} alt="" />
            <span>{user.displayName || "User"}</span>
            <FaChevronDown />
        </div>

        {profileOpen && (
            <div className="dropdown-menu">

                <Link to="/profile">
                    Profile
                </Link>

                <Link to="/wishlist">
                    Wishlist
                </Link>

                <Link to="/booking-history">
                    Booking History
                </Link>

                <button onClick={handleLogout}>
                    Logout
                </button>

            </div>
        )}

    </div>
) : (
    <Link to="/login" className="login-btn">
        <img src={userIcon} alt="" />
        Login
    </Link>
)}

    </nav>
);
}

export default Navbar;