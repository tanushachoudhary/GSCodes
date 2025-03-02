// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Footer from "./components/Footer";
import Community from "./components/Community";
import "./App.css";
import Problems from "./components/Problems";
import ProblemDetail from "./components/ProblemDetail";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import LeaderBoardPage from "./Pages/LeaderBoardPage";
import SignUp from "./components/SignUp";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login userAuthentication = {setIsUserAuthenticated}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problem/:id" element={<ProblemDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/leaderboard" element={<LeaderBoardPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
