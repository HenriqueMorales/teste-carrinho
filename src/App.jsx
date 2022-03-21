import Main from "./Components/Main";
import acimaDeDez from "./data/acima-10-reais.json";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  console.log(acimaDeDez.items);
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Main />
    </>
  );
}

export default App;
