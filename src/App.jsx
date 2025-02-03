import Hello from "./Hello";
import Message from "./Message";

export default function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Hello />
    </div>
  );
}

// Ho importato senza difficoltà due volte il componente 'Hello' ed una 'Message'
