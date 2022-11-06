import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../data/data";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Container
} from "./styles.js";
export const CardComponent = () => {
  const [produtos, setProduto] = useState([]);

  useEffect(() => {
    api
    .get("/produto")
    .then((response) => setProduto(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);
  return (
    <>
    <h1>DESTAQUES</h1>
    <Container>
  
      {produtos.map((produto) => {
            return (
              
              <Card key={produto.id}>
                <Link to={`produto/${produto.id}`}>
              
                <CardImg src={produto.fotoLink}></CardImg>
                <CardTitle>{produto.nome}</CardTitle>
                <CardText>R$ {produto.valor}</CardText>
                
               
              </Link>
              </Card>
            );
          
      })}
    </Container>
  </>
);

  
}
