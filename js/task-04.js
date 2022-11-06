const buttonPlusEl = document.querySelector('button[data-action="increment"]');
const buttonMinusEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector(`#value`);

buttonPlusEl.addEventListener(`click`, onClickPlus);
buttonMinusEl.addEventListener(`click`, onClickMinus);

let counterValue = 0;

function onClickPlus() {
  counterValue += 1;

  valueEl.textContent = counterValue;
}

function onClickMinus() {
  counterValue -= 1;

  valueEl.textContent = counterValue;
}
