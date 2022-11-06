import React, { useEffect, useState } from "react";
import api from "../../../../data/data";
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
    <div>

      {produtos.map((produto) => {
            return (
              <div key={produto.id}>

                <img src={produto.fotoLink}/>
                <h1>{produto.nome}</h1>
                <p>R$ {produto.valor}</p>


              </div>
            );

      })}
    </div>
  </>

  )
}
