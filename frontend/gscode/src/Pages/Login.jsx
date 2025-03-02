import React from "react";
import Navbar from "../components/Navbar"
import Waves from "../components/Waves"
import SignIn from "../components/SignIn";

function Login({userAuthentication}) {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <SignIn userAuthentication= {userAuthentication}/>
      </div>

    
    </div>
  );
}

export default Login;
