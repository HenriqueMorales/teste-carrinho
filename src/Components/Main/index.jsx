import React from "react";
import StyledMain from "../styles";

const Main = () => {
  return (
    <StyledMain>
      <h2>Meu Carrinho</h2>
      <ul>
        <li>Produto</li>
        <li>Produto</li>
        <li>Produto</li>
      </ul>
      <section>
        <div>
          <p>Total</p>
          <p>R$ 13,31</p>
        </div>
        <p className="frete">Parabéns, sua compra tem frete grátis!</p>
      </section>
      <button>Finalizar compra</button>
    </StyledMain>
  );
};

export default Main;
