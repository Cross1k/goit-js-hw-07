const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2");
  const categoryItems = item.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
