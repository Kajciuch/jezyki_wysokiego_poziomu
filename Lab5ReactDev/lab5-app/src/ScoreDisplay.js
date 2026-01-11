function ScoreDisplay({ score }) {
  let message;
  let kolor;

  if (score === 0) {
    message = "Rozwiąż quiz, aby zobaczyć ocenę.";
    kolor = "#aaa";
  } else if (score < 50) {
    message = "Za mało punktów"; 
    kolor = "#f44336";
  } else if (score < 80) {
    message = "W sam raz"; 
    kolor = "#ffeb3b"; 
  } else {
    message = "Super wynik!"; 
    kolor = "#4caf50"; 
  }

  return (
    <div style={{ color: kolor, fontWeight: 'bold', fontSize: '1.2em' }}>
      {message} (Twój wynik: {score} pkt)
    </div>
  );
}
export default ScoreDisplay;