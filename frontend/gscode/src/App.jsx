// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
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
import AddProblem from "./Pages/AddProblem";
import EditProblem from "./Pages/EditProblem";
import DataProvider from "./context/DataProvider";

const PrivateRoute = ({isAuthenticatedPriv,})=>{
  return isAuthenticatedPriv ? 
  <>
    <Outlet/>
  </>
  :
  <Navigate replace to="/login"/>
}

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login userAuthentication = {setIsUserAuthenticated} authStatus= {isUserAuthenticated}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problem/:id" element={<ProblemDetail />} />
        <Route path="/add-problem" element={<AddProblem />} />
        <Route path="/edit-problem" element={<EditProblem />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/leaderboard" element={<LeaderBoardPage/>} />
        
      </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
