export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }

  function handleButtonClickImg(event) {
    console.log(event.currentTarget.src);
    event.stopPropagation();
  }

  return (
    <div>
      <button name="Button" onClick={handleButtonClick}>
        <img
          width={25}
          height={25}
          onClick={handleButtonClickImg}
          src={"#"}
        ></img>
        Click me
      </button>
    </div>
  );
}
