import Hello from "./Hello";
import Welcome from "./Welcome";

export default function App() {
  const age = 64;
  const name = "clara";

  return (
    <div>
      <Welcome name={name} age={age} />
      <hr />
      <Hello />
      <Hello />
    </div>
  );
}

// Ho importato senza difficoltà due volte il componente 'Hello' ed una 'Message'
