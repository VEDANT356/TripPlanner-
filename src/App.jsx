import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import DestinationDetails from "./pages/DestinationDetails";



function App() {
  return (
    
      <BrowserRouter>

      <Toaster
        position="top-right"
        reverseOrder={false}
        />

      <Routes >
        <Route path="/"element={<Home />} />
        <Route path="/login"element={<Login />} />
        <Route path="/signup"element={<Signup />} />

        <Route
          path="/profile"
          element={
          <ProtectedRoute>
          <Profile />
          </ProtectedRoute>
        }
        />
        <Route path="/profile" element={<profile />} />
        <Route
            path="/destination/:id"
            element={<DestinationDetails />}
        />
      </Routes>

      </BrowserRouter>
    
  );
}

export default App;