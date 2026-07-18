import "../styles/Profile.css";
import { auth} from "../firebase/firebase";
import { useEffect , useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    
  });

  return () => unsubscribe();
}, []);


return (
  <div className="profile-page">
    <div className="profile-card">
      <img
        src={
        user?.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
      alt="Profile"
      />

      <h2>{user?.displayName ||  "user"}</h2>

      <p>{user?.email}</p>

    </div>
    <div className="profile-info">
      <h1>My Profile</h1>
      <label>Name</label>
      <input
      type="text"
      value={user?.displayName || ""}
      readOnly
      />

      <button>Edit Profile</button>
    </div>
  </div>
);
}

export default Profile;