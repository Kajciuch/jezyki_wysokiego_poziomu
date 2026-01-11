
export function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Witaj z powrotem!</p> : <p>Zaloguj się</p>} 
    </div>
  );
}

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li> 
      ))}
    </ul>
  );
}