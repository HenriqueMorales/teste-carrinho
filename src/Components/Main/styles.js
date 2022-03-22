import styled from "styled-components";

const StyledMain = styled.main`
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  padding-bottom: 12px;
  width: 80vw;

  @media (min-width: 700px) {
    padding-bottom: 24px;
    width: 600px;
  }

  h2 {
    border-bottom: 2px solid var(--color-gray);
    font-size: 2rem;
    padding: 8px;
    text-align: center;

    @media (min-width: 700px) {
      font-size: 2.8rem;
    }
  }

  ul {
    border-bottom: 2px solid var(--color-gray);
    padding: 12px;

    @media (min-width: 700px) {
      padding: 24px;
    }
  }

  section {
    border-bottom: 2px solid var(--color-gray);
    padding: 12px;

    @media (min-width: 700px) {
      padding: 24px;
    }

    div {
      display: flex;
      font-size: 1.6rem;
      font-weight: bold;
      justify-content: space-between;

      @media (min-width: 700px) {
        font-size: 2.2rem;
      }
    }

    .frete {
      border-radius: 24px;
      color: var(--color-dark-green);
      background: var(--color-light-green);
      font-size: 1.4rem;
      margin: 12px auto 0 auto;
      padding: 8px;
      text-align: center;
      width: max-content;

      @media (min-width: 700px) {
        font-size: 2rem;
        width: 80%;
      }
    }
  }

  button {
    background: var(--color-blue);
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    display: block;
    font-weight: bold;
    font-size: 1.6rem;
    margin: 0 auto;
    margin-top: 12px;
    padding: 12px;
    transition: 0.2s ease-in-out;
    width: 90%;

    @media (min-width: 700px) {
      font-size: 2.4rem;
      margin-top: 24px;
    }

    &:hover {
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-5%);
    }
  }
`;

export default StyledMain;
