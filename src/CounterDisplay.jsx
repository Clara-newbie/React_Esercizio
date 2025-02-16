export default function CounterDisplay({ counter }) {
  const MyStyle = {
    fontSize: "27px",
    color: "maroon",
  };
  return <h2 style={MyStyle}>Il tuo counter:{counter}</h2>;
}
