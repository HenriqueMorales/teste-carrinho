import styled from "styled-components";

const StyledMain = styled.main`
  background: #fff;
  border-radius: 8px;
  padding-bottom: 12px;
  width: 80vw;

  h2 {
    border-bottom: 2px solid var(--color-gray);
    font-size: 2rem;
    padding: 8px;
    text-align: center;
  }

  ul {
    border-bottom: 2px solid var(--color-gray);
    padding: 12px;
  }

  section {
    border-bottom: 2px solid var(--color-gray);
    padding: 12px;

    div {
      display: flex;
      font-size: 1.6rem;
      font-weight: bold;
      justify-content: space-between;
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
    }
  }

  button {
    background: var(--color-blue);
    border: none;
    border-radius: 8px;
    color: #fff;
    display: block;
    font-weight: bold;
    font-size: 1.6rem;
    margin: 0 auto;
    margin-top: 12px;
    padding: 12px;
    width: 90%;
  }
`;

export default StyledMain;
