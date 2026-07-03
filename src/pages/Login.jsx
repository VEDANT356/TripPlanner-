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

                <div className="auth-options">
                <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember Me</span>
                </label> 
                    <a href="#">Forgot Password?</a>
                </div>
                    <button>Login</button>

                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <p>
                        Don't have an account?
                        <Link to="/signup"> Sign UP</Link>
                        </p>

                        <button className="google-btn">
                            <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            width="20"
                            />
                            Continue with Google
                        </button>
                </div>
            </div>
        </div>
    );
}

export  default Login;