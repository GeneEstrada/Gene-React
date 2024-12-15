// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 Wine Shop. All Rights Reserved.</p>
        <div className="social-links mt-3">
          <a href="#" className="mx-2 text-white hover:text-yellow-400">Facebook</a>
          <a href="#" className="mx-2 text-white hover:text-yellow-400">Instagram</a>
          <a href="#" className="mx-2 text-white hover:text-yellow-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
