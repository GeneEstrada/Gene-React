import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import WinePairing from "./components/WinePairing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"; // Import AboutUs component
import ContactForm from "./components/ContactForm"; // Import the ContactForm component
import WineGallery from "./components/WineGallery";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <FeaturedProducts />
              <WinePairing />
              <Testimonials />
              <CTA />
              <Footer />
            </main>
          }
        />
        {/* About Us Page Route */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/winegallery" element={<WineGallery />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
