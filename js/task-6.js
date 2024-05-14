function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const quantity = document.querySelector("input");
const box = document.querySelector("#boxes");

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
const frag = document.createDocumentFragment();

function createBoxes(amount) {
  box.innerHTML = "";

  amount = quantity.value;
  if (amount > 0 && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const divBox = document.createElement("div");
      frag.append(divBox);
      divBox.style.width = `${20 + i * 10}px`;
      divBox.style.height = `${20 + i * 10}px`;
      divBox.style.backgroundColor = getRandomHexColor();
    }
  }
  box.append(frag);
  quantity.value = "";
}

function destroyBoxes() {
  box.innerHTML = "";
}
