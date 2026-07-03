import {Link} from "react-router-dom";
import "../styles/Auth.css";
import { useState } from "react";
import { FaEye , FaEyeSlash } from "react-icons/fa";


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="auth-container">
            <div className="auth-left">
                <h1>✈️ TripPlanner</h1>

                <p>
                    Create your account and start exploring
                    amazing travel destinations.
                </p>
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

                    <button>Create Account</button>

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