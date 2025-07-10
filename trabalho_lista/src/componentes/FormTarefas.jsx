import { useState } from "react"; 
import "../App.css"; 

function FormTarefas() {
  const [texto, setTexto] = useState(""); // estado para o texto do input
  const [tarefas, setTarefas] = useState([]); // estado para a lista de tarefas
  const [filtro, setFiltro] = useState("todas"); // estado para o filtro atual
  const [modoEdicao, setModoEdicao] = useState(false); // indica se está no modo edição
  const [indiceEdicao, setIndiceEdicao] = useState(null); // índice da tarefa em edição

  const adicionarOuAtualizarTarefa = () => {
    if (!texto.trim()) return; // não funciona caso o texto esteja vazio

    const novasTarefas = [...tarefas]; // cria cópia da lista

    if (modoEdicao) {
      novasTarefas[indiceEdicao] = { // atualiza tarefa existente
        ...novasTarefas[indiceEdicao],
        texto,
      };
    } else {
      novasTarefas.push({ texto, status: "" }); // adiciona nova tarefa
    }

    setTarefas(novasTarefas); // atualiza lista de tarefas
    setTexto(""); // limpa campo texto
    setModoEdicao(false); // desativa modo edição
    setIndiceEdicao(null); // limpa índice edição
  };

  const editarTarefa = (i) => {
    setTexto(tarefas[i].texto); // carrega texto antigo da tarefa para edição
    setModoEdicao(true); // ativa modo edição
    setIndiceEdicao(i); // salva índice da tarefa
  };

  const mudarStatus = (i, novoStatus) => {

    const novasTarefas = [...tarefas]; // copia lista
    novasTarefas[i] = {
      ...novasTarefas[i],
      status: novoStatus, // altera status da tarefa
    };
    setTarefas(novasTarefas); // atualiza lista
  };

  const moverTarefa = (i, direcao) => {
    const novoIndex = i + direcao; // calcula novo índice
    if (novoIndex < 0 || novoIndex >= tarefas.length) return; // evita índice inválido

    const novasTarefas = [...tarefas]; // copia lista
    [novasTarefas[i], novasTarefas[novoIndex]] = [novasTarefas[novoIndex], novasTarefas[i]]; // troca posições
    setTarefas(novasTarefas); // atualiza lista
  };

  const resetarTarefas = () => {
    if (window.confirm("Tem certeza que deseja apagar todas as tarefas?")) {
      setTarefas([]); // limpa todas as tarefas
    }
  };

  const tarefasFiltradas = tarefas.filter(
    (t) => filtro === "todas" || t.status === filtro // filtra tarefas por status
  );

  const contar = (status) => tarefas.filter((t) => t.status === status).length; // conta tarefas por status

  const simboloStatus = (status) => {
    const simbolos = {
      realizada: "✓", 
      "nao-realizada": "✗", 
      pendente: "!", 
    };
    return <span className={`simbolo ${status}`}>{simbolos[status]}</span>; // retorna símbolo estilizado
  };

  return (
    <div className="card"> 
      <h1>Lista de Tarefas</h1> 

      <div className="contadores">
        <h2>Contador de Tarefas</h2>
        <p>{simboloStatus("realizada")} Concluídas: {contar("realizada")}</p> {/* contador realizadas */}
        <p>{simboloStatus("pendente")} Pendentes: {contar("pendente")}</p> {/* contador pendentes */}
        <p>{simboloStatus("nao-realizada")} Não realizadas: {contar("nao-realizada")}</p> {/* contador não realizadas */}
      </div>

      <div className="filtro"> {/* filtro de tarefas */}
        <label>Filtrar: </label>
        <select value={filtro} onChange={e => setFiltro(e.target.value)}> {/* altera filtro */}
          <option value="todas">Todas</option>
          <option value="pendente">Pendentes</option>
          <option value="realizada">Realizadas</option>
          <option value="nao-realizada">Não realizadas</option>
        </select>
      </div>

      <div className="formulario"> {/* formulário para adicionar/editar */}
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={texto} 
          onChange={e => setTexto(e.target.value)} // atualiza estado
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

