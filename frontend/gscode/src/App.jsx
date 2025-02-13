// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;