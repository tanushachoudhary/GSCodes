// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import "./App.css";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />

      <Route path="/profile" element={<Profile/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;