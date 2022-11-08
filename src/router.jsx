import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header";
import { Cart } from "./screens/Cart/Cart";
import { DetalheProduto } from "./screens/DetalheProduto";
import { FaleConosco } from "./screens/FaleConosco/FaleConosco.jsx";
import { Home } from "./screens/Home";
import Login from "./screens/Login";
import { Sobre } from "./screens/Sobre/Sobre";
import Gerencia from "./screens/Gerencia/Gerencia.jsx";
import Funcionarios from './screens/Funcionarios/Funcionarios.jsx'
import Cliente from './screens/Clientes/Clientes.jsx'
import ProdutoGerencia from './screens/ProdutoGerencia/ProdutoGerencia.jsx'
import Categoria from './screens/Categoria/Categoria.jsx'


import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/produto/:id" element={<DetalheProduto />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/faleconosco" element={<FaleConosco />} />
      <Route path="/funcionario" element={<Funcionarios />}/>
      <Route path="/gerencia" element={<Gerencia />}/>
      <Route path="/cliente" element={<Cliente />}/>
      <Route path="/categoria" element={<Categoria />}/>
      <Route path="/produto" element={<ProdutoGerencia />}/>
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default Router;
