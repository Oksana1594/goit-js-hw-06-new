let inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, onInput);

function onInput(event) {
  inputEl = event.target.valueAsNumber;
  spanEl.style.fontSize = `${inputEl}px`;
}
