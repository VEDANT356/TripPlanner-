import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import DestinationDetails from "./pages/DestinationDetails";
import Wishlist from "./pages/Wishlist";
import Payment from "./pages/payment";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import ScrollToTop from "./ScrollToTop";
import BookingHistory from "./pages/BookingHistory";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

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

        <Route
          path="/booking/:id"
          element={<ProtectedRoute> <Booking /> </ProtectedRoute>}/>

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/booking-history" element={
            <ProtectedRoute> <BookingHistory /> </ProtectedRoute>}/>

        <Route path="/payment" element={<Payment />} />

        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;