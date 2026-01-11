import React, { useState } from 'react';
import pandaImg from './panda.jpg';

function Interactions() {
  const [state, setState] = useState({ text: 'Najedź na mnie myszką!', color: '#e8f5e9', imgVisible: false });

  const handleMouseOver = () => setState({ ...state, text: 'Myszka wykryta! 🐾' });
  const handleClick = () => alert('Kliknięcie przycisku działa poprawnie!');
  const changeStyle = () => setState({ ...state, color: '#4caf50' });

  return (
    <div>
      <p onMouseOver={handleMouseOver} style={{ color: state.color, fontSize: '1.2em', fontWeight: 'bold' }}>
        {state.text}
      </p>
      
      <button onClick={handleClick}>Kliknij mnie (Zadanie 3)</button>
      <button onClick={changeStyle}>Zmień kolor tego tekstu</button>
      <button onClick={() => setState({ ...state, imgVisible: !state.imgVisible })}>
        {state.imgVisible ? 'Ukryj Pandę' : 'Pokaż Pandę'}
      </button>

      {state.imgVisible && <img src={pandaImg} alt="Panda" className="panda-img" />}

    </div>
  );
}
export default Interactions;