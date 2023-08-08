import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Getstarted from "./components/Getstarted";
import Netflix from "./pages/Netflix";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/netflix" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
