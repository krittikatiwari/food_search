import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Save from "./components/pages/Save";
import  Indian from "./components/TypeOfFood/Indian"
import Aboutus from "./components/pages/Aboutus";
import { Route, Routes } from "react-router-dom";
import Vegetarian from "./components/India/Vegetarian";
import SahiPaneer from "./components/India/Sahipaner";
import Footer from "./components/pages/Footer";
import NonVegetarian from "./components/India/NonVegetarian";
import IndianSweet from "./components/India/IndianSweet";
import StreetFood from "./components/India/StreetFood";
import SouthIndian from "./components/India/SouthIndian";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/save" element={<Save />} />
        <Route path={"home/:id"} element={<Indian />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/non-veg" element={<NonVegetarian />} />
        <Route path="/indian-sweet" element={<IndianSweet />} />
        <Route path="/street-food" element={<StreetFood />} />
        <Route path="/south-indian" element={<SouthIndian />} />
        <Route path={"indian/:id"} element={<SahiPaneer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
