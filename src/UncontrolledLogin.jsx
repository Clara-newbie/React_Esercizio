export default function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const checkbox = event.target.elements.namedItem("checkbox").checked;

    const form = {
      username,
      password,
      checkbox,
    };

    console.log(form);
  }

  function loginWithFormData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      checkbox: formData.get("checkbox"),
    };

    console.log(data);
  }

  return (
    <form onSubmit={(onLogin, loginWithFormData)}>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <input name="checkbox" type="checkbox" />
      <button type="submit">Login 1</button>
      <button type="submit">Login 2</button>
    </form>
  );
}
