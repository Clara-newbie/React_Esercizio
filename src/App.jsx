import AlertClock from "./AlertClock";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default function App() {
  const age = 64;
  const name = "clara";

  function handleShowTime() {
    const time = new Date();
    alert(`Adesso sono le ${time.toLocaleTimeString()}`);
  }

  return (
    <div>
      <Welcome name={name} age={age} />
      <hr />
      <Hello />
      <AlertClock onClickEvent={handleShowTime} />
    </div>
  );
}
