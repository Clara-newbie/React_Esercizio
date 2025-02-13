import Clock from "./Clock";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import Hello from "./Hello";
import MouseClicker from "./MouseClicker";
import Welcome_1 from "./Welcome_1";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

export default function App() {
  const age = 64;
  const name = "clara";

  function handleShowTime() {
    const time = new Date();
    alert(`Adesso sono le ${time.toLocaleTimeString()}`);
  }

  function onLogin() {
    (data) => console.log(data);
  }
  //JSON.stringify(formData, null, 2)

  return (
    <div>
      {/* <Welcome_1 name={name} age={age} />
      <hr />
      <Hello />
      <AlertClock onClickEvent={handleShowTime} />
      <hr />
      <Counter index={1} initialValue={0} />
      <hr />
      <Clock />
      <hr />
      <MouseClicker />
      <hr /> */}
      <InteractiveWelcome />
      <hr />
      <Login onLogin={onLogin} />
      <hr />
      <UncontrolledLogin />
    </div>
  );
}
