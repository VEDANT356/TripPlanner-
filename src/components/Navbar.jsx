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

        {user ? (
            <button className="login-btn" onClick={handleLogout}>
                <img src={userIcon} alt="user" />
                Logout
                </button>
        ) :(
            <Link to="/login" className="login-btn">
                <img src={userIcon} alt="user" />
                Login
            </Link>
        )}

    </nav>
);
}

export default Navbar;