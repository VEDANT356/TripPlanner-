import {Link} from "react-router-dom";
import"../styles/Auth.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    
    return (
        <div className="auth-container"> 
            <div className="auth-left">
                <h1> ✈️ TripPlanner</h1>

                <p> Plan your dream journey with secure booking.
                    smart travel planning and amazing destinations.
                </p>

                <ul className="auth-features">
                    <li>🌍 Explore 100+ Destinations</li>
                    <li>🔒 Secure Login</li>
                    <li>⚡ Fast Booking</li>
                </ul>
            </div>

            <div className="auth-right">
                <div className="auth-card">
                    <h2>Welcome Back</h2>

                    <input
                    type="email"
                    placeholder="Enter Email"
                    />

                    <div className="password-field">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                    />
                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
</div>

                    <button>Login</button>

                    <p>
                        Don't have an account?
                        <Link to="/signup"> Sign UP</Link>
                        </p>

                </div>
            </div>
        </div>
    );
}

export  default Login;