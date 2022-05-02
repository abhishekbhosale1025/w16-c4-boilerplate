import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import HomeDecor from "../components/HomeDecor";
import Kids from "../components/Kids";
import Men from "../components/Men";
import { Navbar} from "../components/Navbar";
import { Products } from "../components/Products";
import Women from "../components/Women";

const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
  
    <Navbar/>

    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/men" element={<Men/>}></Route>
      <Route path="/products/women" element={<Women/>}></Route>
      <Route path="/products/kids" element={<Kids/>}></Route>
      <Route path="/products/homedecor" element={<HomeDecor/>}></Route>
        
    </Routes>  
  
  
  </>;
};
export { MainRoutes };
