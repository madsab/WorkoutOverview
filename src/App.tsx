import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Options from "./pages/Options";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/statistics" element={<Options />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
