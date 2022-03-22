import React from "react";
import StyledLi from "./styles";

const Product = ({ image, name, oldPrice, price }) => {
  return (
    <StyledLi>
      <img src={image} alt="Foto do produto" />
      <div>
        <h4>{name}</h4>
        <p className="old-price">R$ {oldPrice}</p>
        <p className="price">R$ {price}</p>
      </div>
    </StyledLi>
  );
};

export default Product;
