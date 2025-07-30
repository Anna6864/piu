import React, { useState, useEffect } from 'react';

function BgColor() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [palavraPasse, setCondition] = useState(false);

  useEffect(() => {
    if (palavraPasse) {
      const randomColor = '#' + Math.floor(Math.random()*16777215);
      setBackgroundColor(randomColor);
    }
  }, [palavraPasse]);

  const handleClick = () => {
    setCondition(prevState => !prevState);
  };

  return (
    <div style={{ backgroundColor, height: '200px', width: '200px' }}>
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default BgColor;