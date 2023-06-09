import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./Components/Nav";
import About from "./pages/About";
import AdoptingPets from "./pages/AdoptingPets";
import ShelterAndRescue from "./pages/ShelterAndRescue";
import DogAdo from "./pages/DogAdo";
import Footer from "./Components/Footer";
import CatAdo from "./pages/CatAdo";
import CatBreeds from "./pages/CatBreeds";

function App() {
  return (
<div className="App">
  <Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="About" element={<About/>}/>
  <Route path="AdoptingPets" element={<AdoptingPets/>}/>
  <Route path="ShelterAndRescue" element={<ShelterAndRescue/>}/>
  <Route path="DogAdo" element={<DogAdo/>}/>
  <Route path="CatAdo" element={<CatAdo/>}/>
  <Route  path="CatBreeds" element={<CatBreeds/>}/>
</Routes>
<Footer/>
</div>
  );
}

export default App;
