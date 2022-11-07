import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Router from "./router.jsx";
import { DetalheProduto } from "./screens/DetalheProduto";
import { Home } from "./screens/Home";
function App() {
  return (
    <Router/>
  );
}

export default App;

