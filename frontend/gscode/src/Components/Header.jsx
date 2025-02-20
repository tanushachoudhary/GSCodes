import React from "react";
import instituteLogo from "../assets/sgsitslogo.png";

const Header = () => {
    return (
        <nav className="bg-blue-600 w-screen fixed top-0 left-0">
          <div className="flex items-center justify-between w-full px-4 md:px-8 py-3">
            <div className="flex items-center space-x-3 ml-5">
              <img src={instituteLogo} className="h-14 rounded-md" alt="Institute Logo" />
              <h1 className="text-3xl font-extrabold text-white animate-pulse ml-3">
                GS<span className="text-gray-200">.Codes</span>
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-9 text-white">
              <a href="#" className="hover:text-gray-300 text-lg">Home</a>
              <a href="#" className="hover:text-gray-300 text-lg">About</a>
              <a href="#" className="hover:text-gray-300 text-lg">Problems</a>
              <a href="#" className="hover:text-gray-300 text-lg">Community</a>
              <a href="#" className="hover:text-gray-300 text-lg">Leaderboard</a>
              <a href="#" className="hover:text-gray-300 text-lg">Admin Panel</a>
              <a href="#" className="hover:text-gray-300 text-lg">Contact</a>
            </div>
          </div>
        </nav>
    );
};

export default Header;
