import Hello from "./Hello";
import Welcome from "./Welcome";

export default function App() {
  const age = "66";
  const name = "Clara";

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
