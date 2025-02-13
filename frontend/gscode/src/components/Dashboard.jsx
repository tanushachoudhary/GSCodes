import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to the Dashboard!</h1>
      <Button className="mt-4" onClick={() => navigate("/")}>Logout</Button>
    </div>
  );
}
