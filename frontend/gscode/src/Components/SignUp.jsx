import React, { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import instituteLogo from "../assets/sgsitslogo.png";
import Header from "./Header";
import {API} from "../service/api.js";

/* toast.configure(); */
const initialFormValues = {
  role: "",
  enrollmentNo: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  passingYear: "",
  studyingYear: "",
};



export default function SignUp() {
  const roleList = ["Admin", "Student"];
  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (name === "enrollmentNo") {
      if (!value.trim()) error = "Enrollment No is required";
      else if (value.length !== 12) error = "Enrollment No must be 12 digits";
    }
    if (name === "name") {
      if (!value.trim()) error = "Full Name is required";
      else if (/\d/.test(value)) error = "Name should not contain numbers";
    }
    if (name === "email") {
      if (!value.match(/^[^@\s]+@gmail\.com$/)) error = "Email must end with @gmail.com";
    }
    if (name === "passingYear") {
      if (!value.match(/^\d{4}$/)) error = "Invalid year";
    }
    if (name === "studyingYear") {
      if (!value.match(/^[1-4]$/)) error = "Invalid year";
    }
    if (name === "password") {
      if (!value.trim()) error = "Password is required";
    }
    if (name === "confirmPassword") {
      if (value !== formData.password) error = "Passwords do not match";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err !== "")) return;
    let response = await API.userSignup(formData);
    toast.success("Sign Up Successful!");
    console.log("Sign Up Form Submitted", formData);
    console.log(response);
    setFormData(initialFormValues);
    setErrors({});
  };

  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <Header />
      <div className="flex flex-col mt-10 bg-gray-100 p-4">
        <Card className="w-full max-w-sm shadow-lg">
          <CardHeader className="flex flex-col items-center">
            <h1 className="text-6xl font-extrabold text-blue-600 animate-pulse">
              GS<span className="dark:text-black text-gray-800">.Codes</span>
            </h1>
            <img src={instituteLogo} alt="Institute Logo" className="h-20 mb-2 mx-auto mt-3" />
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <select className='border p-2 rounded' name="role" value={formData.role} onChange={(e)=>setFormData({...formData, [e.target.name]: e.target.value})}>
                  <option value="">Select a role</option>
                  {
                      roleList.map((role)=>(
                          <option key={role} value={role}>{role}</option>
                      ))
                  }
              </select>
              <Input type="text" name="enrollmentNo" placeholder="Enrollment Number" value={formData.enrollmentNo} onChange={handleChange} required/>
              {errors.enrollmentNo && <p className="text-red-500 text-sm">{errors.enrollmentNo}</p>}
              <Input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              <Input type="text" name="passingYear" placeholder="Batch" value={formData.passingYear} onChange={handleChange} required/>
              {errors.passingYear && <p className="text-red-500 text-sm">{errors.passingYear}</p>}
              <Input type="text" name="studyingYear" placeholder="Year of Study" value={formData.studyingYear} onChange={handleChange} required />
              {errors.studyingYear && <p className="text-red-500 text-sm">{errors.studyignYear}</p>}
              <Button className="w-full" type="submit">Sign Up</Button>
            </form>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 cursor-pointer">Login</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
