import React from "react";
import { carros } from "../dados_carro";
import "./ListarCarros.css";

export default function ListarCarros() {
  const listaCompleta = carros.map((carro, i) => (
    <li key={i}>
      {carro.modelo} - {carro.ano}
    </li>
  ));

  const listaVermelhos = carros
    .filter((carro) => carro.cor.toLowerCase() === "vermelho")
    .map((carro, i) => <li key={i}>{carro.modelo}</li>);

  return (
    <div className="lista-container">
      <h2>Lista Completa de Carros</h2>
      <ul>{listaCompleta}</ul>

      <h2>Carros Vermelhos </h2>
      <ul>{listaVermelhos}</ul>
    </div>
  );
}
//  chamei a função que está sendo usada "carros" dentro do arquivo dados_
//  carro.js e importei o caminho, dentro da função listarcarros usei o map que vai fazer com que
//   os elementos dentro do arquivo dados_carros.js retorne um array, onde cada elemento d
// também utilizei o parametro toLowerCase e filter para que todo carro que for vermelho entre dentro dessa lista, da mesma forma com a lista completa de carros