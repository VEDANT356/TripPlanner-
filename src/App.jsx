import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import DestinationDetails from "./pages/DestinationDetails";
import Booking  from  "./pages/Booking";
import Wishlist from "./pages/Wishlist";
import Payment from "./pages/payment";



        function App() {
            return (
      
      <BrowserRouter>

      <Toaster
        position="top-right"
        reverseOrder={false}
        />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
    }
  />

            <Route
              path="/destination/:id"
              element={<DestinationDetails />}
            />

            <Route path="/booking/:id" element={<Booking />} />

            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/payment" element={<Payment />} />
            </Routes>
      </BrowserRouter>
    
  );
}

export default App;