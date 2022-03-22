import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  padding: 12px 0;
  gap: 16px;

  img {
    border: 2px solid var(--color-gray);
    height: 100px;
    object-fit: cover;
    width: 100px;
  }

  h4 {
    font-size: 1.6rem;

    @media (min-width: 700px) {
      font-size: 2rem;
    }
  }

  p {
    font-weight: bold;
    padding-top: 4px;
  }

  .old-price {
    font-size: 1.2rem;
    opacity: 0.5;
  }

  .price {
    font-size: 1.6em;
  }
`;

export default StyledLi;
