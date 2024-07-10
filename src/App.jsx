import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.jsx";
import Herosection from "./components/Herosection/Herosection.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hero" element={<Herosection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
