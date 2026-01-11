import './App.css';
import { ThemeProvider, useTheme } from "./ThemeContext";
import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";
import LayoutEffectExample from "./LayoutEffectExample";

function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className={`theme-wrapper ${dark ? '' : 'light-mode'}`}>
      <div className="container">
        <h1>Kaja Thiel 21310 - Lab 6</h1>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button onClick={toggleTheme}>
            Tryb: {dark ? '🌙 Ciemny' : '☀️ Jasny'} (useContext)
          </button>
        </div>

        <ClickCounter />
        <PrimeCalculator />
        <FormReducer />
        <LayoutEffectExample />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}