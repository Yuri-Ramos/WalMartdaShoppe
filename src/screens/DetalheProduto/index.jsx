import { useState } from "react";
import { useParams } from "react-router-dom";


export const DetalheProduto = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProductById = () => {
   // const produto = data.find((d) => d.id == id);
    setProduct(produto);
  };
  console.log(product);

  return (
    <div>
      <h1>{product.nome}</h1>
      <button onClick={() => getProductById()}>o</button>
    </div>
  );
};
