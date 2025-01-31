import React from "react";
import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import instituteLogo from "../assets/sgsitslogo.png";
import Waves from "./Waves";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-center text-blue-600 md:text-6xl lg:text-7xl animate-pulse">
            GS<span className="dark:text-black text-gray-800 ">.Codes</span>
          </h1>
          <img
            src={instituteLogo}
            alt="Institute Logo"
            className="h-20 mb-2 mx-auto"
          />
          <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input type="text" placeholder="Username" required />
            <Input type="password" placeholder="Password" required />
            {!isLogin && (
              <Input type="password" placeholder="Confirm Password" required />
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
