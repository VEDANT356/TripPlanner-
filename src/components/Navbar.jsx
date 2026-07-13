import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import  userIcon from "../assets/user.png";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaBars, FaTimes } from "react-icons/fa";

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

    return (
    <nav className="navbar">
        <div className="logo">
        <Link to="/" className="logo-link">
            TripPlanner
            </Link>
        </div>

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

        <h3>{user?.displayName || "Vedant Kotkar"}</h3>

        <p>{user?.email || "vedantkotkar2607@gmail.com"}</p>
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
            
                <button className="login-btn" onClick={handleLogout}>
                    <img src={userIcon} alt="" />
                    Logout
                </button>
            
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