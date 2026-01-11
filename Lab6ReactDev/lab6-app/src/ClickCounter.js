import { useRef, useState } from "react";

export default function ClickCounter() {
  // useRef przechowuje wartość, która nie znika przy odświeżaniu [cite: 34-35]
  const clickCount = useRef(0);
  
  // Ten stan służy tylko do tego, żeby React "zauważył" zmianę i odświeżył cyfry na ekranie
  const [, forceUpdate] = useState(0);

  const handleClick = () => {
    clickCount.current++; // Zwiększamy wartość w refie [cite: 109]
    console.log("Wartość w useRef:", clickCount.current); // [cite: 110]
    
    // Wymuszamy odświeżenie widoku, żeby użytkownik widział zmianę obok przycisku
    forceUpdate(prev => prev + 1);
  };

  return (
    <div className="card">
      <h3>Ćwiczenie 1: useRef</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button onClick={handleClick}>
          Kliknij mnie
        </button>
        <p style={{ fontSize: '1.5rem', margin: 0 }}>
          Licznik: <strong>{clickCount.current}</strong>
        </p>
      </div>
      <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '10px' }}>
        (Wartość przechowywana w useRef bez klasycznego useState)
      </p>
    </div>
  );
}