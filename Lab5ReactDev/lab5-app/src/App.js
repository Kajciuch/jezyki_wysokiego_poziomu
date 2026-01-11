import React, { useState } from 'react';
import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import Interactions from './Interactions';
import Quiz from './Quiz';

function App() {
  // Stan przechowujący wynik z Quizu, domyślnie 0
  const [quizScore, setQuizScore] = useState(0);

  return (
    <div className="container">
      <h1>Kaja Thiel 21310 - Laboratorium 5</h1>
      
      {/* Ćwiczenie 1*/}
      <div className="card">
        <h3>Ćwiczenie 1: Warunkowe renderowanie (Szczegóły)</h3>
        <ToggleDetails />
      </div>

      {/*Źródło wyniku dla Ćwiczenia 2 */}
      <div className="card quiz-card">
        <h3>Rozwiąż Quiz, aby poznać swój wynik!</h3>
        <Quiz onFinish={(score) => setQuizScore(score)} />
      </div>

      {/* Ćwiczenie 2*/}
      <div className="card">
        <h3>Ćwiczenie 2: Warunkowe przypisanie komponentu</h3>
        <ScoreDisplay score={quizScore} />
      </div>

      {/* Ćwiczenie 3 */}
      <div className="card">
        <h3>Ćwiczenie 3: Lista z dynamicznym filtrowaniem</h3>
        <TaskList />
      </div>

      {/* Ćwiczenie 4  */}
      <div className="card">
        <h3>Ćwiczenie 4: useEffect i zewnętrzne dane (Użytkownicy)</h3>
        <UserList />
      </div>

      {/* Ćwiczenie 5  */}
      <div className="card">
        <h3>Ćwiczenie 5: Licznik z efektami ubocznymi</h3>
        <TimerCounter />
      </div>

      {/* Zadanie 3  */}
      <div className="card">
        <h3>Zadanie 3: Interakcje i Panda</h3>
        <Interactions />
      </div>
    </div>
  );
}

export default App;