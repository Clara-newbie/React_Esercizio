import Clock from "../Clock";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import Hello from "./Hello";
import MouseClicker from "./MouseClicker";
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
      <hr />
      <Counter index={1} initialValue={0} />
      <hr />
      <Clock />
      <hr />
      <MouseClicker />
    </div>
  );
}
