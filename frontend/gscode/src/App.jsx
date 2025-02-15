// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Footer from "./components/Footer"
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Footer/>} />

      <Route path="/profile" element={<Profile/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;