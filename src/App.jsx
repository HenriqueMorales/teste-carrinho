import Main from "./Components/Main";
import abaixoDeDez from "./data/abaixo-10-reais.json";
import acimaDeDez from "./data/acima-10-reais.json";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />

      <Main products={abaixoDeDez.items} />
      <Main products={acimaDeDez.items} />
    </>
  );
}

export default App;
