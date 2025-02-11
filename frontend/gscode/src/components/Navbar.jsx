// Navbar.js (Login Component)
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-blue-600 animate-pulse">
            GS<span className="dark:text-black text-gray-800">.Codes</span>
          </h1>
          <img src={instituteLogo} alt="Institute Logo" className="h-20 mb-2" />
          <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
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
