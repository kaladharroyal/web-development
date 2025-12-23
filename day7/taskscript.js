// ====== MAIN CONTAINER ======
const maindiv = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("div");
container.innerHTML = "<h1>Adding div by JavaScript</h1>";
maindiv.appendChild(container);

// style main container
container.style.padding = "20px";

// ====== LINE-BY-LINE CARDS ======
const card1 = document.createElement("div");
const card2 = document.createElement("div");

container.appendChild(card1);
container.appendChild(card2);

card1.classList.add("card1");
card2.classList.add("card1");

const cards = document.querySelectorAll(".card1");

cards.forEach((item) => {
  item.style.backgroundColor = "red";
  item.style.height = "200px";
  item.style.width = "200px";
  item.style.margin = "10px";
});

// ====== SIDE-BY-SIDE CARDS ======
const flexContainer = document.createElement("div");
container.appendChild(flexContainer);

// make THIS the flex parent
flexContainer.style.display = "flex";
flexContainer.style.gap = "10px";
flexContainer.style.marginTop = "20px";
flexContainer.style.marginLeft = "12px";

const card11 = document.createElement("div");
const card12 = document.createElement("div");

flexContainer.appendChild(card11);
flexContainer.appendChild(card12);

card11.classList.add("card22");
card12.classList.add("card22");

const cards1 = document.querySelectorAll(".card22");

cards1.forEach((item) => {
  item.style.backgroundColor = "red";
  item.style.height = "200px";
  item.style.width = "200px";
});
