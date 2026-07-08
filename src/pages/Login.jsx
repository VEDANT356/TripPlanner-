import {Link} from "react-router-dom";
import"../styles/Auth.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { auth, googleProvider} from "../Firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
            const userCredential =await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            alert ("Login Successful !");
            console.log(userCredential.user);

            navigate("/");
        }catch (error){
            alert(error.message);
        }
    };
    
    const handleForgotPassword = async ()=> {
        if (!email) {
            alert("Please enter your email first.");
            return;
        }

        try{
            await sendPasswordResetEmail(auth, email);
            alert("password reset email sent. Check your inbox.");
        }catch (error){
            alert(error.message);
        }
        
    };

    const handleGoogleLogin = async () => {
        try{
            const result = await signInWithPopup(auth, googleProvider);
            alert("Google Login Successfull!");
            console.log(result.user);
            navigate("/");
        } catch (error){
            alert(error.message);
        }
        
    };
    return (
        <div className="auth-container"> 
            <div className="auth-left">
                <h1>
                    <span className="trip">Trip</span>
                    <span className="planner">Planner</span>
                </h1>

                <h2 className="auth-tagline">
                    Travel <span>Smarter.</span><br />
                    Explore <span>Further.</span>
                </h2>

                <p> Plan your dream journey with secure booking.
                    smart travel planning and amazing destinations.
                    
                </p>

                <ul className="auth-features">
                    <li>
                        <span className="feature-icon">🌍</span>
                        Explore 100+ Destinations
                        </li>
                    <li>
                        <span className="feature-icon">🔒</span>
                        Secure Login
                        </li>
                    <li>
                        <span className="feature-icon">⚡</span>
                        Fast Booking
                        </li>
                </ul>
            </div>

            <div className="auth-right">
                    <Link to="/" className="back-btn">
                    <IoArrowBack />
                    </Link>
                    <div className="auth-card">
                    <h2>Welcome Back</h2>

                    <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="password-field">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    <a onClick={handleForgotPassword}>Forgot Password?</a>
                </div>
                    <button onClick={handleLogin}>Login</button>

                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <p>
                        Don't have an account?
                        <Link to="/signup"> Sign UP</Link>
                        </p>

                        <button className="google-btn"
                                onClick={handleGoogleLogin}
                        >
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