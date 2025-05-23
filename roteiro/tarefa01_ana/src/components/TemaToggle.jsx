function TemaToggle({ tema, alternarTema }) {
  return (
    <button onClick={alternarTema} style={{ margin: '1rem' }}>
      Alternar para {tema === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default TemaToggle;
