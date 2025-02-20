import React from "react";
import instituteLogo from "../assets/sgsitslogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 w-screen fixed top-0 left-0">
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
          <button
            className="hover:bg-gray-300 hover:text-blue-600 text-lg cursor-pointer"
            onClick={() =>
              document
                .getElementById("head")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Home
          </button>
          <button
            className="hover:bg-gray-300 hover:text-blue-600 text-lg cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/problems"
          >
            Problems
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/community"
          >
            Community
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/"
          >
            Leaderboard
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/"
          >
            Admin Panel
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
