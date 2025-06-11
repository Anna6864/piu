import React, { useState } from "react";
import "./Contador.css";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className="contador-container">
      <h2>Contador de Cliques: {contador}</h2>
      <button
        onClick={incrementar}
        className={`btn-incrementar ${contador > 10 ? "ativo" : ""}`}
      >
        Incrementar
      </button>
      <button
        onClick={decrementar}
        className={`btn-decrementar ${contador < 0 ? "ativo" : ""}`}
      >
        Decrementar
      </button>
    </div>
  );
  }
  
// nessa parte do codigo, usei o usestate para mudar o estado fazendo com que sempre que apertar no botão ele mude o estado, 
// trazendo a função do contador para sempre que ele for maior que 10 irá ficar verde (mudando de estado), 
// e menor que 0 decrementar (também mudando de estado com a ajuda do usestate, onclick e setcontador(que irá utilizar a variavel para acompanhar 
// um valor que será incrementado ou decrementado))