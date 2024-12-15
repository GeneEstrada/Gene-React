import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="header bg-gray-800 py-4 px-8 fixed w-full top-0 left-0 z-20">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">WineShop</h1>
        <ul className="flex space-x-6 text-sm text-white">
          <li>
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/winegallery" className="hover:text-yellow-500">
              Wine Gallery
            </Link>
          </li>
          <li>
            <Link to="/contactform" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
