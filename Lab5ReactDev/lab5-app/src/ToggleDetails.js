import { useState } from 'react';

function ToggleDetails() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
      </button>
      {show && <p>To są szczegóły, które możesz dowolnie ukrywać lub wyświetlać.</p>}
    </div>
  );
}
export default ToggleDetails;