import { useState } from "react";

const initialData = {
  username: "",
  password: "",
  checkbox: false,
};

export default function Login_1({ onLogin }) {
  const [data, setData] = useState(initialData);

  function handleInputChange(event) {
    const { name, value, checked } = event.target;
    const type = event.target.type;

    setData((dt) => ({
      ...dt,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleLogin() {
    onLogin(data);
  }

  function handleReset() {
    setData(initialData);
  }

  return (
    <div>
      <input
        name="username"
        type="text"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="checkbox"
        type="checkbox"
        checked={data.checkbox}
        onChange={handleInputChange}
      />

      <button disabled={!data.username && !data.password} onClick={handleLogin}>
        Login
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
