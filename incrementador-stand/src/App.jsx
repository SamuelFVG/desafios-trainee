/*
  DESAFIO DE PROGRAMAÇÃO
  ------------------------------------------------------
  TUDO QUE ESTÁ COMENTADO DEVE SER REMOVIDO PARA O DESAFIO. A PESSOA DEVERÁ FAZER.

  COMO APLICAR:  Primeiramente, explicar sobre os conceitos importantes:
    - O que é um incrementador
    - Os componentes do site (div pra mostrar e botões). Mostrar o código funcionando. 
    - O que é um state, por que usar eles e como os setar. 
    - Função onClick, e como setar as coisas.
    - Deixar a pessoa fazer e ir dando auxílio.
*/

import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div className="number-display">{/*contador*/}</div>
      <div className="button-container">
        <button
        //onClick={() => setContador(contador + 1)}
        >
          + 1
        </button>
        <button
        //onClick={() => setContador(contador - 1)}
        >
          - 1
        </button>
      </div>
    </>
  );
}

export default App;
