import { useState } from "react";
import Welcome_2 from "./Welcome_2";

export default function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input value={inputValue} onChange={handleInput} />
      <Welcome_2 name={inputValue} />
    </div>
  );
}
