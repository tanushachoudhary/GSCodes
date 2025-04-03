import React, { useContext } from "react";
import instituteLogo from "../assets/sgsitslogo.png";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import {API} from "../service/api.js";

const Header = ({authStatus}) => {
  const {account, setAccount} = useContext(DataContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("refreshToken");

  const userLogout = async() =>{
    let response = await API.userLogout({token});
    if(!response){
      console.log("Some error occured while logging out");
    }else{
      console.log(response);
      setAccount({_id:"",username: "", name:"", role:""});
      navigate("/");
    }
  }

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
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
            to="/problems"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Problems
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/community"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Community
          </Link>
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/leaderboard"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Leaderboard
          </Link>
          {account.role === "Admin" ? (
            <Link
              className="hover:bg-gray-300 hover:text-blue-600 text-lg"
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Admin Panel
            </Link>
          ) : (
            <></>
          )}
          <Link
            className="hover:bg-gray-300 hover:text-blue-600 text-lg"
            to="/contact"
          >
            Contact
          </Link>
          {account.username && (
            <Link
            to="/profile"
          >
            Profile
          </Link>)

          }
          {
            account.username && 
            
            <button onClick={userLogout}>Logout</button>
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
