import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
    FaBars,
    FaTimes,
    FaChevronDown
} from "react-icons/fa";

function Navbar() {

    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const handleLogout = async () => {
        await signOut(auth);

        setMenuOpen(false);
        setProfileOpen(false);

        toast.success("Logged out Successfully!");
    };

    const handleSectionClick = (sectionId) => {

        setMenuOpen(false);

        if (window.location.pathname !== "/") {
            navigate("/");
            
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: "smooth"
                });
            }, 100);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="logo">
                <Link to="/" className="logo-link">
                    TripPlanner
                </Link>
            </div>


            {/* Desktop Navigation */}
            <ul className="nav-links">

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <button
                        className="nav-section-btn"
                        onClick={() => handleSectionClick("about")}
                    >
                        About Us
                    </button>
                </li>

                <li>
                    <Link to="/destinations">
                        Destination
                    </Link>
                </li>

                <li>
                    <button
                        className="nav-section-btn"
                        onClick={() => handleSectionClick("contact")}
                    >
                        Contact
                    </button>
                </li>

            </ul>


            {/* Hamburger */}
            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>


            {/* Overlay */}
            {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}


            {/* Mobile Sidebar */}
            <div className={`sidebar ${menuOpen ? "active" : ""}`}>

                {/* Sidebar Header */}
                <div className="sidebar-header">
                    <FaTimes
                        onClick={() => setMenuOpen(false)}
                    />
                </div>


                {/* Sidebar Profile */}
                <div className="sidebar-profile">

                    <img
                        src={
                            user?.photoURL ||
                            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        alt="User"
                    />

                    <h3>
                        {user?.displayName || "User"}
                    </h3>

                    <p>
                        {user?.email || ""}
                    </p>

                </div>


                <hr />


                {/* Sidebar Links */}

                <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </Link>


                <button
                    className="sidebar-section-btn"
                    onClick={() => handleSectionClick("about")}
                >
                    About Us
                </button>


                <Link
                    to="/destinations"
                    onClick={() => setMenuOpen(false)}
                >
                    Destination
                </Link>


                <button
                    className="sidebar-section-btn"
                    onClick={() => handleSectionClick("contact")}
                >
                    Contact
                </button>


                <Link
                    to="/wishlist"
                    onClick={() => setMenuOpen(false)}
                >
                    Wishlist
                </Link>


                <Link
                    to="/booking-history"
                    onClick={() => setMenuOpen(false)}
                >
                    Booking History
                </Link>


                <hr />


                {/* Login / Logout */}

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


            {/* Desktop Profile */}

            {user ? (

                <div className="profile-menu">

                    <div
                        className="profile-btn"
                        onClick={() =>
                            setProfileOpen(!profileOpen)
                        }
                    >

                        <img
                            src={
                                user?.photoURL ||
                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            }
                            alt="Profile"
                        />

                        <span>
                            {user.displayName || "User"}
                        </span>

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

                <Link
                    to="/login"
                    className="login-btn"
                >

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="Profile"
                    />

                    Login

                </Link>

            )}

        </nav>
    );
}

export default Navbar;