import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({ index, initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((c) => c + index);
  }
  function handleDecrement() {
    setCounter((c) => c - index);
  }
  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleIncrement}>Incrementa</button>;
      <button onClick={handleDecrement}>Decrementa</button>;
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

// il parametro dovrebbe essere una funzione, così che il current value sia costantemente aggiornato
// se il parametro fosse un valore immediato, il setState modificherebbe sempre lo stato a partire dal valore iniziale
