import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../data/data";
import CardComponent from "../../components/Card";

export const DetalheProduto = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {}, [id]);

  return <CardComponent />;
};
