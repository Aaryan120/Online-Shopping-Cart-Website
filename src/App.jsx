import React from "react";
import Navbar from "./Components/Navbar.js"
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Cart from "./Pages/Cart.js";


const App = () => {
  return (<div>
    <div className="bg-slate-900">
      <Navbar/>
    </div>
      


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
  </div>)
};

export default App;
