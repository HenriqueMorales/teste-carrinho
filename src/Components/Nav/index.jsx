import React from "react";
import StyledNav from "./styles";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <StyledNav>
      <button onClick={() => navigate("/")}>Abaixo de R$ 10</button>
      <button onClick={() => navigate("/acima-de-dez")}>Acima de R$ 10</button>
    </StyledNav>
  );
};

export default Nav;
