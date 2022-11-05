import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import { DetalheProduto } from "./screens/DetalheProduto";
import { Home } from "./screens/Home";

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
      </Routes>
    </BrowserRouter>
   <Footer/>
   </>

  );
}

export default App;
