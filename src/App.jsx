import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";

export default function App() {
  const age = "24";
  const name = "Clara";

  return (
    <div>
      <Welcome name={name} age={age} />
      <hr />
      <Hello />
      <Message />
      <Hello />
    </div>
  );
}

// Ho importato senza difficoltà due volte il componente 'Hello' ed una 'Message'
