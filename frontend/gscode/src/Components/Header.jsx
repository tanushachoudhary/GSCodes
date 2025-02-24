import React from "react";
import instituteLogo from "../assets/sgsitslogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 opacity-95 w-screen fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between w-full px-4 md:px-8 py-3">
        <div className="flex items-center space-x-3 ml-5">
          <img
            src={instituteLogo}
            className="h-14 rounded-md"
            alt="Institute Logo"
          />
          <h1 className="text-3xl font-extrabold text-white animate-pulse ml-3">
            GS<span className="text-gray-200">.Codes</span>
          </h1>
        </div>

        <div className="hidden md:flex space-x-9 text-white mr-2">
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/#about"
          >
            About
          </Link>

          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/problems" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Problems
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/community" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Community
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/leaderboard" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Leaderboard
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Admin Panel
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/contact" 
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
