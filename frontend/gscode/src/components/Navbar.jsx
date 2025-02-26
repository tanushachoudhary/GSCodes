import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import instituteLogo from "../assets/sgsitslogo.png";
import { useNavigate } from "react-router-dom";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  enrollmentNo: "",
  passingYear: "",
  studyingYear: "",
};

const intialLoginValues = {
  username: "",
  password: "",
}

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState(intialLoginValues);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!formData.enrollmentNo.trim()) newErrors.enrollmentNo = "Enrollment No is required";
    if (!isLogin) {
      if (!formData.name.trim()) newErrors.name = "Full Name is required";
      if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = "Invalid email";
      if (!formData.passingYear.match(/^\d{4}$/)) newErrors.passingYear = "Invalid year";
      if (!formData.studyingYear.match(/^[1-4]$/)) newErrors.studyingYear = "Invalid year";
    }
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!isLogin && formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form submitted", formData);
    setFormData(initialFormValues);
    setErrors({});
  };


  const loginUser = () =>{
    console.log("will login")
    /* let response = await API.userLogin(loginData);
    if(response.isSuccess){
        setErrors({});
        setLoginData(loginInitialValues);
        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
       
        setAccount({username: response.data.username, name: response.data.name});
        isUserAuthenticated(true);
        Navigate('/');
    
    }else{
        setErrors({loginError: "Something went wrong. Please try again later"})
    } */
}

  return (
    <div className="flex flex-col mt-10 min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <h1 className="text-6xl font-extrabold text-blue-600 animate-pulse">
            GS<span className="dark:text-black text-gray-800">.Codes</span>
          </h1>
          <img src={instituteLogo} alt="Institute Logo" className="h-20 mb-2 mx-auto" />
          <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
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
            {!isLogin && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <Input
                  type="text"
                  name="passingYear"
                  placeholder="Passing Year"
                  value={formData.passingYear}
                  onChange={handleChange}
                />
                {errors.passingYear && <p className="text-red-500 text-sm">{errors.passingYear}</p>}
                <Input
                  type="text"
                  name="studyingYear"
                  placeholder="Studying Year"
                  value={formData.studyingYear}
                  onChange={handleChange}
                />
                {errors.studyingYear && <p className="text-red-500 text-sm">{errors.studyingYear}</p>}
              </div>
            )}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            {!isLogin && (
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            )}
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            <Button onClick={isLogin ? loginUser : signupUser} className="w-full" >{isLogin ? "Login" : "Sign Up"}</Button>
          </form>
          <p className="text-center text-sm mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData(initialFormValues);
                setErrors({});
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}