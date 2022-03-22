import React from "react";
import Product from "../Product";
import StyledMain from "./styles";

const Main = ({ products }) => {
  const total = (products.reduce((a, b) => a + b.sellingPrice, 0) / 100)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  const freteGratis = Number(total.replace(",", ".")) > 10 ? true : false;

  return (
    <StyledMain>
      <h2>Meu carrinho</h2>
      <ul>
        {products.map((item) => (
          <Product
            key={item.uniqueId}
            image={item.imageUrl}
            name={item.name}
            oldPrice={(item.price / 100)
              .toFixed(2)
              .toString()
              .replace(".", ",")}
            price={(item.sellingPrice / 100)
              .toFixed(2)
              .toString()
              .replace(".", ",")}
          />
        ))}
      </ul>
      <section>
        <div>
          <p>Total</p>
          <p>R$ {total}</p>
        </div>
        {freteGratis ? (
          <p className="frete">Parabéns, sua compra tem frete grátis!</p>
        ) : null}
      </section>
      <button>Finalizar compra</button>
    </StyledMain>
  );
};

export default Main;
