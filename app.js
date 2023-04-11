const start = document.querySelector(".start");
const deckComputer = document.querySelector(".computerDeck");
let computerField = document.querySelector(".computerField");
const deckUser = document.querySelector(".userDeck");
let userField = document.querySelector(".userField");
const divs = document.querySelectorAll("div");
let creatures = [];
let heroes = [];

const computer_deck = [
  {
    name: "Centaur",
    attack: 30,
    image: "monsters_and_heroes/hero_centaur.png",
  },
  {
    name: "Fiery Dragon",
    attack: 12,
    image: "monsters_and_heroes/monster_fiery_dragon.png",
  },
  {
    name: "Grim Pikeman",
    attack: 52,
    image: "monsters_and_heroes/monster_grim_pikeman.png",
  },
  {
    name: "Mighty Hydra",
    attack: 52,
    image: "monsters_and_heroes/monster_mighty_hydra.png",
  },
  {
    name: "Skeleton Warrior",
    attack: 52,
    image: "monsters_and_heroes/monster_skeleton_warrior.png",
  },
  {
    name: "Viper King",
    attack: 52,
    image: "monsters_and_heroes/monster_viper_king.png",
  },
  {
    name: "Goblin Warrior",
    attack: 52,
    image: "monsters_and_heroes/monster_goblin_warrior.png",
  },
  {
    name: "Warewolf",
    attack: 52,
    image: "monsters_and_heroes/monster_werewolf.png",
  },

  {
    name: "Banshee",
    attack: 52,
    image: "monsters_and_heroes/monster_the_banshee.png",
  },
];

const user_deck = [
  { name: "user1", attack: 30, defence: 20 },
  { name: "user2", attack: 30, defence: 20 },
  { name: "user3", attack: 30, defence: 20 },
  { name: "user4", attack: 30, defence: 20 },
  { name: "user5", attack: 30, defence: 20 },
  { name: "user6", attack: 30, defence: 20 },
  { name: "user7", attack: 30, defence: 20 },
  { name: "user8", attack: 30, defence: 20 },
  { name: "user9", attack: 30, defence: 20 },
];

const shuffleComputerCards = () => {
  for (let i = 0; i < 5; i++) {
    creatures.push(
      computer_deck[Math.floor(Math.random() * computer_deck.length)]
    );
  }
  return creatures;
};

const shuffleUserCards = () => {
  for (let i = 0; i < 5; i++) {
    heroes.push(user_deck[Math.floor(Math.random() * user_deck.length)]);
  }
  return heroes;
};

const displayDeck = () => {
  shuffleComputerCards();
  shuffleUserCards();

  creatures.forEach((element) => {
    deckComputer.innerHTML += `<div class = "card"> attack: ${element.attack}  <img src="${element.image}"></div>`;
  });

  heroes.forEach((item) => {
    deckUser.innerHTML += `<div>${item.name} attack: ${item.attack} defence: ${item.defence}</div>`;
  });
};

const playGame = (event) => {
  displayDeck();
};

const selectHero = (event) => {
  userField.innerHTML += event.target.heroes;
  console.log("Clicked");
};

start.addEventListener("click", playGame);

document.addEventListener("click", (event) => {
  if (event.target.matches("img")) {
    userField.innerHTML = event.target.innerHTML;
    heroes.pop(event.target.innerHTML);
    console.log(heroes);
    deckUser.innerHTML = heroes.innerHTML;
  }
});
