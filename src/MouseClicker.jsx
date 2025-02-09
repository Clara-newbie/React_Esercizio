export default function MouseClicker() {
  function handleClickOne(event) {
    console.log(event.target.name);
  }

  function handleClickTwo(event) {
    console.log(event.target.src, event.currentTarget.name);
  }

  return (
    <div>
      <button name="one" onClick={handleClickOne}>
        Bottone 1
      </button>
      ,
      <button name="two" onClick={handleClickTwo}>
        <img src="/click.png" />
      </button>
    </div>
  );
}
