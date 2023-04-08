const start = document.querySelector(".start");
const deckComputer = document.querySelector(".computerDeck");
let computerField = document.querySelector(".computerField");
let creatures = [];

const computer_deck = [
  { name: "Groygle", attack: 30 },
  { name: "Mighty Hydra", attack: 12 },
  { name: "Husar", attack: 52 },
  { name: "Blue Dragon", attack: 12 },
  { name: "Pikemen", attack: 12 },
  { name: "Vampire", attack: 12 },
  { name: "Skeleton", attack: 12 },
  { name: "Doombar", attack: 12 },
  { name: "Evil liche", attack: 12 },
];

const user_deck = [
  { name: "Groygle", attack: 30, defence: 20 },
  { name: "Groygle", attack: 30, defence: 20 },
  { name: "Groygle", attack: 30, defence: 20 },
  { name: "Groygle", attack: 30, defence: 20 },
  { name: "Groygle", attack: 30, defence: 20 },
  { name: "Groygle", attack: 30, defence: 20 },
  { name: "Groygle", attack: 30, defence: 20 },
  { name: "Groygle", attack: 30, defence: 20 },
  { name: "Groygle", attack: 30, defence: 20 },
];

const shuffleCards = () => {
  for (let i = 0; i < 5; i++) {
    creatures.push(
      computer_deck[Math.floor(Math.random() * computer_deck.length)]
    );
  }
  return creatures;
};

const displayDeck = () => {
  shuffleCards();
  creatures.forEach((element) => {
    deckComputer.innerHTML += `<div>${element.name} attack: ${element.attack} </div>`;
  });
};

const playGame = (event) => {
  displayDeck();
};

start.addEventListener("click", playGame());

console.log(creatures);
