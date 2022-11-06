const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredientsEl = document.querySelector(`#ingredients`);

for (const element of ingredients) {
  const createLiEl = document.createElement(`li`);
  createLiEl.textContent = element;
  createLiEl.classList.add(`item`);
  ulIngredientsEl.appendChild(createLiEl);
}
