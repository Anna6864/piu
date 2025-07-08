import { useState } from "react";
import "../App.css";

function FormTarefas() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  const adicionarOuAtualizarTarefa = () => {
    if (!texto.trim()) return;

    const novasTarefas = [...tarefas];
    if (modoEdicao) {
      novasTarefas[indiceEdicao] = {
        ...novasTarefas[indiceEdicao],
        texto,
      };
    } else {
      novasTarefas.push({ texto, status: "" });
    }

    setTarefas(novasTarefas);
    setTexto("");
    setModoEdicao(false);
    setIndiceEdicao(null);
  };

  const editarTarefa = (i) => {
    setTexto(tarefas[i].texto);
    setModoEdicao(true);
    setIndiceEdicao(i);
  };

  const mudarStatus = (i, status) => {
    const novasTarefas = [...tarefas];
    novasTarefas[i].status = status;
    setTarefas(novasTarefas);
  };

  const moverTarefa = (i, direcao) => {
    const novoIndex = i + direcao;
    if (novoIndex < 0 || novoIndex >= tarefas.length) return;

    const novasTarefas = [...tarefas];
    [novasTarefas[i], novasTarefas[novoIndex]] = [novasTarefas[novoIndex], novasTarefas[i]];
    setTarefas(novasTarefas);
  };

  const resetarTarefas = () => {
    if (window.confirm("Tem certeza que deseja apagar todas as tarefas?")) {
      setTarefas([]);
    }
  };

  const tarefasFiltradas = tarefas.filter(
    (t) => filtro === "todas" || t.status === filtro
  );

  const contar = (status) => tarefas.filter((t) => t.status === status).length;

  const simboloStatus = (status) => {
    const simbolos = {
      realizada: "✓",
      "nao-realizada": "✗",
      pendente: "!",
    };
    return <span className={`simbolo ${status}`}>{simbolos[status]}</span>;
  };

  return (
    <div className="card">
      <h1>Lista de Tarefas</h1>

      <div className="contadores">
        <h2>Contador de Tarefas</h2>
        <p>{simboloStatus("realizada")} Concluídas: {contar("realizada")}</p>
        <p>{simboloStatus("pendente")} Pendentes: {contar("pendente")}</p>
        <p>{simboloStatus("nao-realizada")} Não realizadas: {contar("nao-realizada")}</p>
      </div>

      <div className="filtro">
        <label>Filtrar: </label>
        <select value={filtro} onChange={e => setFiltro(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="pendente">Pendentes</option>
          <option value="realizada">Realizadas</option>
          <option value="nao-realizada">Não realizadas</option>
        </select>
      </div>

      <div className="formulario">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={texto}
          onChange={e => setTexto(e.target.value)}
        />
        <button onClick={adicionarOuAtualizarTarefa}>
          {modoEdicao ? "Atualizar" : "Adicionar"}
        </button>
      </div>

      <ul className="lista">
        {tarefasFiltradas.map((tarefa, i) => (
          <li key={i}>
            {simboloStatus(tarefa.status)}
            <span>{tarefa.texto}</span>

            <div className="botoes">
              <button onClick={() => mudarStatus(i, "realizada")}>Realizada</button>
              <button onClick={() => mudarStatus(i, "nao-realizada")}>Não realizada</button>
              <button onClick={() => mudarStatus(i, "pendente")}>Pendente</button>
              <button onClick={() => moverTarefa(i, -1)}>▲</button>
              <button onClick={() => moverTarefa(i, +1)}>▼</button>
              <button onClick={() => editarTarefa(i)}>Editar</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="resetar-container">
        <button className="resetar" onClick={resetarTarefas}>Resetar Tarefas</button>
      </div>
    </div>
  );
}

export default FormTarefas;