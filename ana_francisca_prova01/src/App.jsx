import React from "react";
import Contador from "./componentes/Contador";
import ListarCarros from "./componentes/ListarCarros";

export default function App() {
  return (
    <div>
      <Contador />
      <ListarCarros />
    </div>
  );
}

// Nessa parte do código importei os arquivos que
//  criei junto com o caminho, e chamei a função APP que é geralmente a que está 
//   sendo usada de acordo com o nome do arquivo e retornei os arquivos que usei no código