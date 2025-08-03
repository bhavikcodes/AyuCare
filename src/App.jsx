import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Health from "./components/Health";
import Shop from "./components/Shop";
import About from "./components/About";
import CustomerReviews from "./components/Review"; // Ensure correct import path
import Doctors from "./components/Doctors";

const App = () => {
  return (
    <Router> {/* Wrap Routes inside Router */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
            <Route path="/doctors" element={<Doctors />} /> {/* Assuming Health component handles doctors */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
          <CustomerReviews /> 
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;