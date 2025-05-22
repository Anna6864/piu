import { useState } from "react";

function Cor() {
    const [cor, setCor] = useState("white");

    function alterarCor() {
        const novaCor = cor === "white" ? "blue" : "white";
        setCor(novaCor);
    }

    return (
        <div style={{ backgroundColor: cor, padding: "20px", minHeight: "100vh" }}>
            <h2>Atividade</h2>
            <p>Clique no botão</p>
            <button onClick={alterarCor}>
                Clique aqui
            </button>
        </div>
    );
}

export default Cor