import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import Main from "./Components/Main";

import abaixoDeDez from "./data/abaixo-10-reais.json";
import acimaDeDez from "./data/acima-10-reais.json";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main products={abaixoDeDez.items} />} />
          <Route
            path="/acima-de-dez"
            element={<Main products={acimaDeDez.items} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
