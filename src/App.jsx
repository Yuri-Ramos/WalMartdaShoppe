import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import { DetalheProduto } from "./screens/DetalheProduto";
import { Home } from "./screens/Home";
function App() {
  return (
    <><Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
      </Routes>
      <Footer/>
    </BrowserRouter></>
  );
}

export default App;
