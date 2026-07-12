import { Link } from "react-router-dom";
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
        alert("Logged Out Successfully!");
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

        <ul className={`nav-links ${menuOpen ? "active" :  ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Packages</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Destination</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Contacts</Link></li>
        </ul>

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