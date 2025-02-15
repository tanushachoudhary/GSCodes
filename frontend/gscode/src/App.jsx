// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Waves from "./components/Waves";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex justify-center">
        <Navbar />
      </div>

      <div className="w-full fixed bottom-0 ">
        {/* <Waves /> */}
      </div>
      {/* <Footer></Footer> */}


    </div>
  );
}

export default App;