import Card from './Card';
import personagem1 from '../assets/personagens/personagem1.jpg';
import personagem2 from '../assets/personagens/personagem2.jpg';
import personagem3 from '../assets/personagens/personagem3.jpg';
import personagem4 from '../assets/personagens/personagem4.jpg';
import personagem5 from '../assets/personagens/personagem5.jpg';
import personagem6 from '../assets/personagens/personagem6.jpg';

const personagens = [
  { nome: 'Alice', imagem: personagem1, descricao: 'Do bonde das maravilhas.' },
  { nome: 'Bob esponja', imagem: personagem2, descricao: 'Bob esponja calça triangular' },
  { nome: 'Barbie', imagem: personagem3, descricao: 'A gata' },
  { nome: 'Cinderela', imagem: personagem4, descricao: 'A do pé de cristal' },
  { nome: 'Elsa', imagem: personagem5, descricao: 'Faz geleira' },
  { nome: 'Pateta', imagem: personagem6, descricao: 'Representante de muitos.' },
];

function Galeria({ setSelecionado }) {
  return (
    <div className="galeria">
      {personagens.map((p, i) => (
        <Card
          key={i}
          nome={p.nome}
          imagem={p.imagem}
          onClick={() => setSelecionado(p)}
        />
      ))}
    </div>
  );
}

export default Galeria;
