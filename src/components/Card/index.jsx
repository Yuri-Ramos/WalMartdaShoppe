import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../data/data";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Photo,
  Description,
  Destaque,
  CardButon,
} from "./styles.js";
const CardComponent = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/produto/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  const AdicionarAoCarrinho = () => {
    alert("Add ai amigo");
  };

  return (
    <>
      <Destaque>Detalhes</Destaque>
      <Container>
        <Card key={product.id}>
          <Photo>
            <CardImg src={product.fotoLink}></CardImg>
          </Photo>
          <Description>
            <CardTitle>{product.nome}</CardTitle>
            <CardText>R$ {product.valor}</CardText>
            <CardButon
              onClick={() => {
                AdicionarAoCarrinho();
              }}
            >
              Adicionar ao carrinho{" "}
            </CardButon>
          </Description>
        </Card>
      </Container>
    </>
  );
};
export default CardComponent;
