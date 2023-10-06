import { useState } from "react";

import "./App.css";

function App() {
  const [mensagem, setMensagem] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        placeholder="Digite a mensagem"
        onChange={(e) => setMensagem(e.target.value)}
      ></input>
      <button onClick={() => alert(mensagem)}>Dê o alert</button>
    </div>
  );
}

export default App;
