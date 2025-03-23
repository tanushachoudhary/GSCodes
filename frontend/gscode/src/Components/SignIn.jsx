import React, { useContext, useState, useEffect } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { ToastContainer ,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import instituteLogo from "../assets/sgsitslogo.png";
import Header from "./Header";
import {API} from "../service/api.js";
import { Navigate, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider.jsx";


const initialLogInValues = {
  enrollmentNo : "",
  password: "",
}

export default function SignIn({userAuthentication, authStatus}) {
  const [formData, setFormData] = useState(initialLogInValues);
  const [errors, setErrors] = useState({});

  const {account, setAccount} = useContext(DataContext);

  useEffect(() => {
      console.log("Updated Account:", account);
      console.log(authStatus);
  }, [account, authStatus]); 

  const navigate = useNavigate();
  const validateField = (name, value) => {
    let error = "";
    if (name === "enrollmentNo") {
      if (!value.trim()) error = "Enrollment No is required";
      else if (value.length !== 12) error = "Enrollment No must be 12 digits";
    }
    if (name === "password") {
      if (!value.trim()) error = "Password is required";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err !== "")) return;
    toast.success("Login Successful!");
    let response = await API.userLogin(formData);
    console.log("Login Form Submitted", formData);
    console.log(response);
    localStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
    localStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

    setAccount({_id:response.data.data._id, username: response.data.data.StudentUsername, name: response.data.data.StudentName, role: response.data.data.role})
    userAuthentication(true);
    setFormData({ enrollmentNo: "", password: "" });
    setErrors({});
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Header authStatus={authStatus}/>
      <div className="flex flex-col mt-10 bg-gray-100 p-4">
        <Card className="w-full max-w-sm shadow-lg">
          <CardHeader className="flex flex-col items-center">
            <h1 className="text-6xl font-extrabold text-blue-600 animate-pulse">
              GS<span className="dark:text-black text-gray-800">.Codes</span>
            </h1>
            <img src={instituteLogo} alt="Institute Logo" className="h-20 mb-2 mx-auto mt-3" />
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="enrollmentNo"
                placeholder="Enrollment No"
                value={formData.enrollmentNo}
                onChange={handleChange}
                required
              />
              {errors.enrollmentNo && <p className="text-red-500 text-sm">{errors.enrollmentNo}</p>}
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              <Button className="w-full" type="submit">Login</Button>
            </form>
            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 cursor-pointer">Sign Up</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
