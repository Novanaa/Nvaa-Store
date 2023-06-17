import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Store from "./components/pages/Store";
import Cart from "./components/pages/Cart";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/products/:id" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
