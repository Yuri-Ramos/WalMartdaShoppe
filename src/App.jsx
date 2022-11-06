import { Home } from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetalheProduto } from "./screens/DetalheProduto";
import Header from "./Header";
import React from "react";

function App() {
  return (
    <><Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
