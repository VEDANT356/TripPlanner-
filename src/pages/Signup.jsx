import {Link} from "react-router-dom";
import "../styles/Auth.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { auth, googleProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db} from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSignup = async () => {
        if (password !== confirmPassword){
            alert("Password do not match!");
            return;
        }
        if (!agreeTerms) {
            alert("Please accept Term & Conditions.");
            return;
        }
        try{
            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                await setDoc (doc(db,"users", userCredential.user.uid),{
                    name : name,
                    email: email ,
                    createdAt: new Date(),
                });
                alert("Account Created Successfully!");

                console.log(userCredential.user);

                navigate("/");

        }catch (error) {
            alert (error.message);
        }
        
    };

    const handleGoogleLogin = async() => {
        try{
            const result = await signInWithPopup(auth, googleProvider);
            alert ("Google Login Successful!");
            console.log(result.user);
            navigate("/");
        } catch (error){
            alert(error.message);
        }
    };
    return (
        <div className="auth-container">

            <Link to="/" className="back-btn">
                    <IoArrowBack />
            </Link>

            <div className="auth-left">
                
                    <h1>
                        <span className="trip">Trip</span>
                        <span className="planner">Planner</span>
                    </h1>
                    
                    <h2 className="auth-tagline">
                        Travel <span>Smarter.</span><br />
                        Explore <span>Further.</span>
                    </h2>

                <p>
                    Create your account and start exploring
                    amazing travel destinations.
                </p>
                <ul className="auth-features">
                    <li>
                        <span className="feature-icon">🌍</span>
                        Explore 100+ Destinations
                        </li>
                    <li><span className="feature-icon">🛡️</span>
                        Secure Booking
                        </li>
                    <li>
                        <span className="feature-icon">⚡</span>
                        Instant Confirmation
                        </li>
                </ul>
            </div>
            <div className="auth-right">
                    
                    
                    <div className="auth-card">
                    <h2>Create Account</h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
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
                    <div className="password-field">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            <input type="checkbox"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                            />
                        <span>
                            I agree to <a href="#">Terms & Conditions</a>
                        </span>
                        </label>
                    </div>

                    <button onClick={handleSignup}>
                        Create Account
                    </button>
                    <div className="divider">
                        <span>OR</span>
                    </div>

                    

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