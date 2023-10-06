import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa) setTarefas([tarefa, ...tarefas]);
  }

  return (
    <>
      <form style={{ display: "flex", gap: "1rem" }}>
        <input
          placeholder="Digite a tarefa que você quer adicionar"
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button type="button" onClick={() => adicionarTarefa()}>
          Adicionar
        </button>
      </form>

      {tarefas.map((tarefa) => (
        <div
          key={tarefa}
          style={{ margin: "1rem", padding: "0.5rem", backgroundColor: "#eee" }}
        >
          {tarefa}
        </div>
      ))}
    </>
  );
}

export default App;
