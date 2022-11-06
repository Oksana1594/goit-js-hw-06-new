const liItemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${liItemEl.length}`);
console.log(` `);
liItemEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const amountLiEl = item.lastElementChild;
  console.log(`Elements: ${amountLiEl.children.length}`);
  console.log(` `);
});
