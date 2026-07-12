import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import  userIcon from "../assets/user.png";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

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
            {menuOpen ? <faTimes /> : <FaBars />}
        </div>

        <ul className={`nav-link ${menuOpen ? "active" :  ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Packages</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Destination</Link></li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Contacts</Link></li>
        </ul>

        {user ? (
            <li>
                <button onClick={handleLogout} className="mobile-logout">
                Logout
                </button>
            </li>
        ) : (
            <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                    Login
                </Link>
            </li>
        )}

    </nav>
);
}

export default Navbar;