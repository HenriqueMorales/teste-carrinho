import Main from "./Components/Main";
import acimaDeDez from "./data/acima-10-reais.json";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  console.log(acimaDeDez.items);
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
