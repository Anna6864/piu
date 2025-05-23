function Card({ nome, imagem, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imagem} alt={nome} width="150" />
      <h3>{nome}</h3>
    </div>
  );
}

export default Card;
