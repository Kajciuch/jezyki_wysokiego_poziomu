import './App.css'; // Pamiętaj o imporcie pliku CSS!
import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import { LoginStatus, TodoList } from './ExtraComponents';
import LoginForm from './LoginForm';

function App() {
  const zadania = ['Nauka Reacta', 'Zrobienie laboratorium', 'Wysłanie na GitHub'];

  return (
    <div className="container">
      <h1>Laboratorium React - Część 1</h1>
      
      <div className="card">
        <Hello /> 
      </div>
      
      <div className="card">
        <h3>Powitania (Props)</h3>
        <Hello name="Anna" />
        <Hello name="Bartek" />
      </div>
      
      <div className="card">
        <h3>Licznik (State)</h3>
        <Counter />
      </div>
      
      <div className="card">
        <h3>Śledzenie wpisów (Events)</h3>
        <InputTracker />
      </div>
      
      <div className="card">
        <h3>Status logowania (Conditional Rendering)</h3>
        <LoginStatus isLoggedIn={true} />
      </div>
      
      <div className="card">
        <h3>Lista zadań (Mapping)</h3>
        <TodoList todos={zadania} />
      </div>
      
      <div className="card">
        <h3>Formularz logowania</h3>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;