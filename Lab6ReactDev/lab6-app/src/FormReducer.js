import { useReducer } from "react";

const initialState = { name: "", email: "" };

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME": return { ...state, name: action.payload };
    case "SET_EMAIL": return { ...state, email: action.payload };
    default: return state;
  }
}

export default function FormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card">
      <h3>Ćwiczenie 3: useReducer</h3>
      <form>
        <input 
          placeholder="Imię" 
          value={state.name} 
          onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} 
        />
        <input 
          placeholder="Email" 
          value={state.email} 
          onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })} 
        />
      </form>
      <p>Aktualny stan (JSON): {JSON.stringify(state)}</p>
    </div>
  );
}