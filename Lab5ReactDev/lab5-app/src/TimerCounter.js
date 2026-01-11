import { useState, useEffect } from 'react';

function TimerCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 100) return; 
    
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [count]); 

  return (
    <p>
      <strong>Automatyczny licznik sekund: {count} / 100</strong>
    </p>
  );
}

export default TimerCounter;