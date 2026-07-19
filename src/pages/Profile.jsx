import "../styles/Profile.css";
import { auth} from "../firebase/firebase";
import { useEffect , useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { db } from "../firebase/firebase";
import { doc, setDoc , getDoc } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";


function Profile() {
  const [ editMode, setEditMode] = useState(false);
  const [newName , setNewName] = useState("");
  const [phone , setPhone] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
      setUser(currentUser);

        if (currentUser) {
          setNewName(currentUser.displayName || "");

          const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
      setPhone(docSnap.data().phone || "");
    }
  }
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

  const handleSave = async () => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: newName,
    });

    await setDoc(
      doc(db, "users", auth.currentUser.uid),
      {
        name: newName,
        phone: phone,
        email: auth.currentUser.email,
        photo: auth.currentUser.photoURL,
      },
      { merge: true }
    );

    setUser({
      ...auth.currentUser,
      displayName: newName,
    });

    setEditMode(false);

    toast.success("Profile Updated!");
  } catch (err) {
    toast.error(err.message);
  }
};

 const handleChangePassword = async () => {
  try{
    await sendPasswordResetEmail (auth, user.email);

    toast.success("Password reset email sent!");
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
        {phone || "+91 Not Added"}
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
        value={newName}
        readOnly={!editMode}
        onChange={(e) => setNewName(e.target.value)}
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
        value={phone}
        placeholder="+91XXXXXXXXXX"
        readOnly={!editMode}
        onChange={(e) => setPhone(e.target.value)}
      />

      {editMode ? (
          <button onClick={handleSave}>
            Save Profile
          </button>
        ) : (
          <button onClick={() => setEditMode(true)}>
            Edit Profile
          </button>
        )}

      <button
      className="change-pass-btn"
      onClick={handleChangePassword}
      >
        Change Password
      </button>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>


    </div>
  </div>
);
}

export default Profile;