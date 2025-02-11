// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Waves from "./components/Waves";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Login Form Centered */}
      <div className="flex-grow flex items-center justify-center">
        <Navbar />
      </div>

      {/* Waves Positioned at Bottom */}
      <div className="w-full fixed bottom-0">
        <Waves />
      </div>
    </div>
  );
}

export default App;