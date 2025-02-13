import React from "react";
import Navbar from "../Components/Navbar"
import Waves from "../Components/Waves"

export default function Login() {

  return (
    
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <Navbar />
      </div>

      <div className="w-full fixed bottom-0">
        <Waves />
      </div>
    </div>
  );
}