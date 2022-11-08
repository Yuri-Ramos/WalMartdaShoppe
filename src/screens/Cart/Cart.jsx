import React, { useContext } from "react";
import { CartContext } from "../../context/Cart";
import "./cart.module.css";

export const Cart = () => {
  let totalPrice = 0;
  const {
    productsCart,
    clearCart,
    handleAddItemToCart,
    handleRemoveItemToCart,
    removalItem,
  } = useContext(CartContext);

  return (
    <div className="container">
      <h1> Cart</h1>
      {productsCart.length === 0 && (
        <h1 className="fw-bold mb-0 text-black">Carrinho sem produtos</h1>
      )}
      {productsCart?.map((prod) => {
        const subTotal = prod.valor * prod.quantidade;
        totalPrice += subTotal;
        return (
          <div
            className="row mb-4 d-flex justify-content-between align-items-center"
            key={prod.id}
          >
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img
                src={prod.fotoLink}
                className="img-fluid rounded-3"
                alt={prod.nome}
              />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-black mb-0">{prod.nome}</h6>
              <h6 className="mb-0 text-muted">Quantidade: {prod.quantidade}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button
                className="btn btn-link px-2"
                onClick={() => handleRemoveItemToCart(prod.id)}
              >
                <i className="fa fa-minus"></i>
              </button>

              <input
                id="form1"
                min="0"
                name="quantity"
                defaultValue={prod.quantidade}
                type="number"
                disabled
                className="form-control form-control-sm"
              />

              <button
                className="btn btn-link px-2"
                onClick={() =>
                  handleAddItemToCart(
                    prod.id,
                    prod.fotoLink,
                    prod.nome,
                    prod.valor
                  )
                }
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6 className="mb-0">R$ {subTotal.toFixed(2)}</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <button
                className="btn btn-link"
                onClick={() => removalItem(prod.id)}
              >
                <i class="fa fa-xmark"></i>
              </button>
            </div>
            

            <hr className="my-5" />
          </div>
        );
      })}
      <h5 className="aligh-itens-center"> Valor total do pedido R$ {totalPrice.toFixed(2)}</h5>
    </div>
  );
};
