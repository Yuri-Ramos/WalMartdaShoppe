import { Home } from "./screens/Home";
import Login from "./screens/Login";
import { DetalheProduto } from "./screens/DetalheProduto";
import Header from "./components/Header";
import Footer from "./components/footer/Footer.jsx";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produto/:id" element={<DetalheProduto />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default Router;
