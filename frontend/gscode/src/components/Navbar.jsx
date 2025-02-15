import React, { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

import instituteLogo from "../assets/sgsitslogo.png";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [studyingYear, setStudyingYear] = useState("");

  return (
    <div className="flex flex-col mt-30 min-h-screen bg-gray-100 p-4 jsu">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <h1 className="text-6xl font-extrabold text-blue-600 animate-pulse">
            GS<span className="dark:text-black text-gray-800">.Codes</span>
          </h1>
          <img src={instituteLogo} alt="Institute Logo" className="h-20 mb-2 mx-auto" />
          <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {!isLogin && (
              <>
                <Input
                  type="text"
                  placeholder="Enrollment No"
                  required
                  value={enrollmentNo}
                  onChange={(e) => setEnrollmentNo(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Passing Year"
                  required
                  value={passingYear}
                  onChange={(e) => setPassingYear(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Studying Year"
                  required
                  value={studyingYear}
                  onChange={(e) => setStudyingYear(e.target.value)}
                />
              </>
            )}
            <Input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isLogin && (
              <Input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            <Button className="w-full">{isLogin ? "Login" : "Sign Up"}</Button>
          </form>
          <p className="text-center text-sm mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}