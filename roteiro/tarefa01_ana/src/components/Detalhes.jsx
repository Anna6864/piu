function Detalhes({ personagem }) {
  return (
    <div className="detalhes">
      <h2>{personagem.nome}</h2>
      <img src={personagem.imagem} alt={personagem.nome} width="300" />
      <p>{personagem.descricao}</p>
    </div>
  );
}

export default Detalhes;
