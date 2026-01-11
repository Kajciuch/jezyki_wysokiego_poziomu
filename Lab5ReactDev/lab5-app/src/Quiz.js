import React, { useState } from 'react';

const pytania = [
  { pytanie: "Co jest stolicą Polski?", odpowiedzi: ["Kraków", "Warszawa", "Gdańsk"], poprawna: "Warszawa" },
  { pytanie: "Jakie kolory ma flaga Polski?", odpowiedzi: ["Biało-czerwone", "Biało-niebieskie", "Żółto-czerwone"], poprawna: "Biało-czerwone" },
  { pytanie: "W którym roku Polska przyjęła chrzest?", odpowiedzi: ["966", "1410", "1918"], poprawna: "966" }
];

function Quiz({ onFinish }) {
  const [aktualne, setAktualne] = useState(0);
  const [wynik, setWynik] = useState(0);
  const [ukonczono, setUkonczono] = useState(false);

  const sprawdzOdpowiedz = (odp) => {
    let nowyWynik = wynik;
    if (odp === pytania[aktualne].poprawna) {
      nowyWynik = wynik + 33.4; // Skalujemy do ~100 pkt
      setWynik(nowyWynik);
    }

    if (aktualne + 1 < pytania.length) {
      setAktualne(aktualne + 1);
    } else {
      setUkonczono(true);
      onFinish(Math.round(nowyWynik)); // Wysyłamy wynik do App.js
    }
  };

  return (
    <div className="quiz-box">
      {ukonczono ? (
        <p>Quiz zakończony! Sprawdź wynik w Ćwiczeniu 2 poniżej.</p>
      ) : (
        <div>
          <p>Pytanie {aktualne + 1} z 3</p>
          <h4>{pytania[aktualne].pytanie}</h4>
          {pytania[aktualne].odpowiedzi.map((odp, i) => (
            <button key={i} onClick={() => sprawdzOdpowiedz(odp)}>{odp}</button>
          ))}
        </div>
      )}
    </div>
  );
}
export default Quiz;