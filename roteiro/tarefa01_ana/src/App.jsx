import React, { useState } from 'react';
import Galeria from './components/Galeria';
import Detalhes from './components/Detalhes';
import TemaToggle from './components/TemaToggle';
import './index.css';

function App() {
  const [tema, setTema] = useState('light');
  const [selecionado, setSelecionado] = useState(null);

  const alternarTema = () => setTema(tema === 'light' ? 'dark' : 'light');

  return (
    <div className={tema}>
      <h1 className="titulo">Galeria de Personagens</h1>
      <TemaToggle tema={tema} alternarTema={alternarTema} />
      <Galeria setSelecionado={setSelecionado} />
      {selecionado && <Detalhes personagem={selecionado} />}
    </div>
  );
}

export default App;
