import "../styles/Profile.css";
import { auth} from "../firebase/firebase";
import { useEffect , useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      console.log(currentUser?.photoURL);

      setUser(currentUser);
    
  });

  return () => unsubscribe();
}, []);
  const navigate =useNavigate();

  const handleLogout = async () => {
    try{
    await signOut(auth);
    toast.success("Logged Out Successfully!");
    navigate("/", { replace:true});
    } catch (error) {
      toast.error(error.message);
    }
  };


return (
  <div className="profile-page">

    <Link to="/" className="profile-back">
      <IoArrowBack />
    </Link>
    <div className="profile-card">
      <img
        src={
        user?.photoURL
            ? user.photoURL.replace("=s96-c", "=s400-c")
            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
        alt="Profile"
        style={{
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "3px solid white",
  }}
/>

      <h2>{user?.displayName ||  "user"}</h2>

      <p>{user?.email}</p>

      <p className="phone-text">
        +91 Not Added
      </p>

      <p className="member-text">
        Member Since 2026
      </p>

    </div>
    <div className="profile-info">
      <h1>My Profile</h1>
      <label>Name</label>
      <input
      type="text"
      value={user?.displayName || ""}
      readOnly
      />

      <label>Email</label>
      <input
        type="email"
        value={user?.email || ""}
        readOnly
      />

      <label>Phone Number</label>
      <input
        type="text"
        value="+91 Not Added"
        readOnly
        />

      <button>Edit Profile</button>

      <button className="change-pass-btn">
        Change Password
      </button>

      <button className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>


    </div>
  </div>
);
}

export default Profile;