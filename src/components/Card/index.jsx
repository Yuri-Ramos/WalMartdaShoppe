import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../data/data";
import {
  Card, CardButon, CardImg,
  CardText,
  CardTitle,
  Container, Description,
  Destaque, Photo
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
                handleAddItemToCart();
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
