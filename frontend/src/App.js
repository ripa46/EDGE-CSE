import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import HotelPage from "./pages/HotelPage";
import RoomPage from "./pages/RoomPage";
import GuestPage from "./pages/GuestPage";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/guests" element={<GuestPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
