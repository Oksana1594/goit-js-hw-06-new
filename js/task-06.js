const textInputEl = document.querySelector(`#validation-input`);
const validationInputEl = Number(textInputEl.getAttribute(`data-length`));

console.log(validationInputEl);

textInputEl.addEventListener(`blur`, onBlur);

function addRemoveColor(remove, add) {
  textInputEl.classList.remove(remove);
  textInputEl.classList.add(add);
}

function onBlur(event) {
  if (event.currentTarget.value.length === validationInputEl) {
    addRemoveColor(`invalid`, `valid`);
  } else {
    addRemoveColor(`valid`, `invalid`);
  }
}
