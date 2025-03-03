import React from "react";
import Navbar from "../components/Navbar"
import Waves from "../components/Waves"
import SignIn from "../components/SignIn";

function Login() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <SignIn/>
      </div>

    
    </div>
  );
}

export default Login;
