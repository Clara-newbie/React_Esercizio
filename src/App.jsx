import Clock from "./Clock";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import Hello from "./Hello";
import MouseClicker from "./MouseClicker";
import Welcome_1 from "./Welcome_1";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
import FocusableInput from "./FocusableInput";
import MountedRef from "./MountedRef";
import { StrictMode } from "react";
import Colors from "./Colors";
import Todolist from "./TodoList";

export default function App() {
  const age = 64;
  const name = "clara";
  const colors = [
    {
      id: "item_1",
      name: "pink",
    },
    {
      id: "item_2",
      name: "green",
    },
    {
      id: "item_3",
      name: "yellow",
    },
    {
      id: "item_4",
      name: "purple",
    },
  ];

  function handleShowTime() {
    const time = new Date();
    alert(`Adesso sono le ${time.toLocaleTimeString()}`);
  }

  function onLogin(data) {
    console.log(data);
  }
  //JSON.stringify(formData, null, 2)

  return (
    <div>
      {/* <Welcome_1 name={name} age={age} />
      <hr />
      <Hello />
      <AlertClock onClickEvent={handleShowTime} />
      <hr />
      <Clock />
      <hr />
      <MouseClicker />
      <hr /> */}
      <Counter index={1} initialValue={0} />
      <hr />
      <InteractiveWelcome />
      <hr />
      <Login onLogin={onLogin} />
      {/*<hr />
      <UncontrolledLogin />
      <hr />
      <FocusableInput />
      <StrictMode>
        <MountedRef />
      </StrictMode>
      <hr />
      <Colors colors={colors} />
      <hr />
      <Todolist /> */}
    </div>
  );
}
