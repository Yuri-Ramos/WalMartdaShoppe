import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header";
import { Cart } from "./screens/Cart/Cart";
import { DetalheProduto } from "./screens/DetalheProduto";
import { FaleConosco } from "./screens/FaleConosco/FaleConosco.jsx";
import { Gerenciamento } from "./screens/Gerenciamento/Gerenciamento";
import { Home } from "./screens/Home";
import Login from "./screens/Login";


import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";


const Router = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gerenciamento" element={<Gerenciamento />} />
      <Route path="/produto/:id" element={<DetalheProduto />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/faleconosco" element={<FaleConosco />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default Router;
