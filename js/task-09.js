const widgetEl = document.querySelector(".widget");
const spanEl = widgetEl.querySelector(".color");
const buttonEl = widgetEl.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClick() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  spanEl.textContent = color;
}

buttonEl.addEventListener(`click`, onClick);
