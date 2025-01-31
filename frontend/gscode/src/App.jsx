import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from "./components/Navbar"
import Waves from './components/Waves'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute top-0 left-0 w-full z-30">
        <Waves />
      </div>
      <div className="relative z-20">
        <Login />
      </div>
    </div>
  );
}

export default App
