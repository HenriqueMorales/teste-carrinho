import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;

  button {
    background: var(--color-blue);
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-size: 1.6rem;
    margin: 8px 0;
    padding: 12px;
    transition: 0.2s ease-in-out;
    width: 100%;

    &:hover {
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-5%);
    }
  }
`;

export default StyledNav;
