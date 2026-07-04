import {Link} from "react-router-dom";
import "../styles/Auth.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="auth-container">

            <Link to="/" className="back-btn">
                    <IoArrowBack />
            </Link>

            <div className="auth-left">
                <h1>✈️ TripPlanner</h1>

                <p>
                    Create your account and start exploring
                    amazing travel destinations.
                </p>
                <ul className="auth-features">
                    <li>🌍 Explore 100+ Destinations</li>
                    <li>🔒 Secure Login</li>
                    <li>⚡ Fast Booking</li>
                </ul>
            </div>
            <div className="auth-right">
                    
                    
                    <div className="auth-card">
                    <h2>Create Account</h2>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <div className="password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                        />

                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className="password-field">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                        />

                        <span
                            className="eye-icon"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="auth-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                        <span>
                            I agree to <a href="#">Terms & Conditions</a>
                        </span>
                        </label>
                    </div>

                    <button>Create Account</button>
                    <div className="divider">
                        <span>OR</span>
                    </div>

                    

                        <button className="google-btn">
                            <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            width="20"
                            />
                            Continue with Google
                        </button>
                    <p>
                        Already have an account ?
                        <Link to="/login">Login</Link>
                    </p>
                </div>
                </div>
            
        </div>
    );
}

export default Signup;