const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredientsEl = document.querySelector(`#ingredients`);

const createItemEl = ingredients
  .map((ingredient) => `<li class="item"> "${ingredient}" </li>`)
  .join(``);
ulIngredientsEl.insertAdjacentHTML(`beforeend`, createItemEl);
