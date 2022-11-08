import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header";
import { Cart } from "./screens/Cart/Cart";
import { DetalheProduto } from "./screens/DetalheProduto";
import { FaleConosco } from "./screens/FaleConosco/FaleConosco.jsx";
import { Gerenciamento } from "./screens/Gerenciamento/Gerenciamento";
import { Home } from "./screens/Home";
import Login from "./screens/Login";
import { Funcionarios } from './screens/Funcionarios/Funcionarios'
import { ProdutoGerencia } from './screens/ProdutoGerencia/ProdutoGerencia'
import { Cliente } from './screens/Clientes/Clientes'
import { Categoria } from './screens/Categoria/Categoria'


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
      <Route path="/funcionario" element={<Funcionarios />}/>
      <Route path="/cliente" element={<Cliente />}/>
      <Route path="/categoria" element={<Categoria />}/>
      <Route path="/produto" element={<ProdutoGerencia />}/>
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default Router;
