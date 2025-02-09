export default function MouseClicker() {
  function handleClickButton(event) {
    console.log(event.target.name);
  }

  function handleClickImg(event) {
    console.log(event.target.src);
  }

  return (
    <div>
      <button name="one" onClick={handleClickButton}>
        Bottone 1
      </button>
      ,
      <button name="two" onClick={handleClickButton}>
        <img src="/click.png" onClick={handleClickImg} />
      </button>
    </div>
  );
}
