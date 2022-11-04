import { Home } from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetalheProduto } from "./screens/DetalheProduto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
