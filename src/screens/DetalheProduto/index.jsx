import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../data/data";
import {
  Card,
  CardImg,
  CardImgDescricao,
  CardText,
  CardTitle,
  CardDescricao,
  Container,
} from "../Home/components/Card/styles.js";
export const DetalheProduto = () => {
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
  }, [id]);

  return (
    <Card key={product.id}>
      <CardImgDescricao src={product.fotoLink}></CardImgDescricao>
      <CardTitle>{product.nome}</CardTitle>
      <CardText>R$ {product.valor}</CardText>
      <CardDescricao>{product.descricao}</CardDescricao>
    </Card>
  );
};
