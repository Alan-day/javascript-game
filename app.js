const start = document.querySelector(".start");
const deckComputer = document.querySelector(".computerDeck");
let computerField = document.querySelector(".computerField");
let deckUser = document.querySelector(".userDeck");
let userField = document.querySelector(".userField");
const divs = document.querySelectorAll("div");
const cardElements = document.querySelectorAll(".card");
let combatButton = document.querySelector(".fight");

let computerPoints = document.querySelector(".computer_score");
let playerPoints = document.querySelector(".player_score");

let creatures = [];
let heroes = [];

let fightingHero = {};
let fightingMonster = {};

const computer_deck = [
  {
    id: 1,
    name: "Centaur",
    attack: 30,
    image: "monsters_and_heroes/hero_centaur.png",
  },
  {
    id: 2,
    name: "Fiery Dragon",
    attack: 12,
    image: "monsters_and_heroes/monster_fiery_dragon.png",
  },
  {
    id: 3,
    name: "Grim Pikeman",
    attack: 52,
    image: "monsters_and_heroes/monster_grim_pikeman.png",
  },
  {
    id: 4,
    name: "Mighty Hydra",
    attack: 52,
    image: "monsters_and_heroes/monster_mighty_hydra.png",
  },
  {
    id: 5,
    name: "Skeleton Warrior",
    attack: 52,
    image: "monsters_and_heroes/monster_skeleton_warrior.png",
  },
  {
    id: 6,
    name: "Viper King",
    attack: 52,
    image: "monsters_and_heroes/monster_viper_king.png",
  },
  {
    id: 7,
    name: "Goblin Warrior",
    attack: 52,
    image: "monsters_and_heroes/monster_goblin_warrior.png",
  },
  {
    id: 8,
    name: "Warewolf",
    attack: 52,
    image: "monsters_and_heroes/monster_werewolf.png",
  },

  {
    id: 9,
    name: "Banshee",
    attack: 52,
    image: "monsters_and_heroes/monster_the_banshee.png",
  },
  {
    id: 10,
    name: "Viverna",
    attack: 52,
    image: "monsters_and_heroes/monster_viverna.png",
  },
  {
    id: 11,
    name: "Troll Warrior",
    attack: 52,
    image: "monsters_and_heroes/monster_troll_warrior.png",
  },
];

const user_deck = [
  {
    id: 1,
    defence: 10,
    name: "Archer",
    attack: 10,
    image: "monsters_and_heroes/hero_archer.png",
  },
  {
    id: 2,
    name: "Slinger",
    attack: 10,
    defence: 10,
    image: "monsters_and_heroes/hero_barefoot_slinger.png",
  },
  {
    id: 3,
    name: "Centaur",
    attack: 10,
    defence: 10,
    image: "monsters_and_heroes/hero_centaur.png",
  },
  {
    id: 4,
    name: "Dwarf Warrior",
    attack: 10,
    defence: 10,
    image: "monsters_and_heroes/hero_dwarf_warrior.png",
  },
  {
    id: 5,
    name: "Adventurer from Mystos",
    attack: 10,
    defence: 10,
    image: "monsters_and_heroes/hero_greatsword_adventurer.png",
  },
  {
    id: 6,
    name: "Knight of Greenleaf Order",
    attack: 10,
    defence: 10,
    image: "monsters_and_heroes/hero_green_knight.png",
  },
  {
    id: 7,
    name: "Swordsman",
    attack: 10,
    defence: 10,
    image: "monsters_and_heroes/hero_heavy_swordsman.png",
  },
  {
    id: 8,
    name: "light swordsman",
    attack: 10,
    defence: 10,
    image: "monsters_and_heroes/hero_light_swordsman.png",
  },
  {
    id: 9,
    name: "Paladin",
    attack: 10,
    defence: 10,
    image: "monsters_and_heroes/hero_paladin.png",
  },
  {
    id: 10,
    name: "pikeman",
    attack: 4,
    defence: 10,
    image: "monsters_and_heroes/hero_pikeman.png",
  },

  {
    id: 11,
    name: "villager",
    attack: 3,
    defence: 10,
    image: "monsters_and_heroes/hero_village_idiot.png",
  },
];

const throwDice = (event) => {
  let dice = Math.floor(Math.random() * 5 + 1);
  return dice;
};

const shuffleComputerCards = () => {
  for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * computer_deck.length);
    let selectedMonster = computer_deck[random];
    if (!creatures.includes(selectedMonster)) {
      computer_deck.splice(random, 1);
      creatures.push(selectedMonster);
    }
  }
  return creatures;
};

const shuffleUserCards = () => {
  for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * user_deck.length);
    let selectedMonster = user_deck[random];
    if (!heroes.includes(selectedMonster)) {
      user_deck.splice(random, 1);
      heroes.push(selectedMonster);
      console.log(heroes);
    }
  }
  return heroes;
};

const displayDeck = () => {
  shuffleComputerCards();
  shuffleUserCards();

  creatures.forEach((item) => {
    const creatureData = JSON.stringify(item);
    deckComputer.innerHTML += `
      <div class="card" 
           data-hero='${creatureData}' 
           data-attack='${item.attack}' 
           data-defense='${item.defence}'>
        <img src="${item.image}" />
        Card no. ${item.id}
      </div>
    `;
  });

  heroes.forEach((item) => {
    const heroData = JSON.stringify(item);
    deckUser.innerHTML += `
      <div class="card" 
           data-hero='${heroData}' 
           data-attack='${item.attack}' 
           data-defense='${item.defence}'>
        <img src="${item.image}" />
        Card no. ${item.id}
      </div>
    `;
  });
};

cardElements.forEach((card) => {
  const heroDataJSON = card.getAttribute("data-hero");
  const heroData = JSON.parse(heroDataJSON);

  //  `heroData` contains the object associated with the card element, i couldn't get that earlier as i just had innerHTML
});

const playGame = (event) => {
  displayDeck();
};

const showFields = (event) => {
  userField.innerHTML.style.display = "block";
  computerField.innerHTML.style.display = "block";
};

start.addEventListener("click", playGame, { once: true }, showFields);

deckComputer.addEventListener("click", (event) => {
  if (event.target.matches(".card")) {
    const monsterDataJSON = event.target.getAttribute("data-hero");
    const monsterData = JSON.parse(monsterDataJSON);

    const cardHTML = `
      <div class="card" data-hero='${monsterDataJSON}'>
        attack: ${monsterData.attack}
        <img src="${monsterData.image}">
      </div>
    `;

    computerField.innerHTML = cardHTML;

    fightingMonster = {
      attack: monsterData.attack,
    };

    console.log(fightingMonster);

    const cardId = monsterData.id;
    const cardIndex = creatures.findIndex((item) => item.id === cardId);
    if (cardIndex !== -1) {
      creatures.splice(cardIndex, 1);
    }

    deckComputer.innerHTML = "";
    creatures.forEach((item) => {
      const monsterData = JSON.stringify(item);
      deckComputer.innerHTML += `
        <div class="card" data-hero='${monsterData}'>
          attack: ${item.attack}
          <img src="${item.image}">
          card no. ${item.id}
        </div>
      `;
    });
  }
});

deckUser.addEventListener("click", (event) => {
  if (event.target.matches(".card")) {
    const heroDataJSON = event.target.getAttribute("data-hero");
    const heroData = JSON.parse(heroDataJSON);

    const cardHTML = `
      <div class="card" data-hero='${heroDataJSON}'>
        attack: ${heroData.attack}
        defence: ${heroData.defence}
        <img src="${heroData.image}">
        id: ${heroData.id}
      </div>
    `;

    userField.innerHTML = cardHTML;

    fightingHero = {
      attack: heroData.attack,
      defence: heroData.defence,
    };

    console.log(fightingHero);

    const cardId = heroData.id;
    const cardIndex = heroes.findIndex((item) => item.id === cardId);
    if (cardIndex !== -1) {
      heroes.splice(cardIndex, 1);
    }

    deckUser.innerHTML = "";
    heroes.forEach((item) => {
      const heroData = JSON.stringify(item);
      deckUser.innerHTML += `
        <div class="card" data-hero='${heroData}'>
          attack: ${item.attack}
          defence: ${item.defence}
          <img src="${item.image}">
          card no. ${item.id}
        </div>
      `;
    });
  }
});

const fight = () => {
  if (userField.innerHTML != "" && computerField.innerHTML != "") {
    const userDice = throwDice();
    const computerDice = throwDice();

    const userAttack =
      userDice * fightingHero.attack -
      fightingMonster.attack +
      fightingHero.defence;

    console.log(userAttack);

    const computerAttack =
      computerDice * fightingMonster.attack - fightingHero.defence;
    console.log(computerAttack);

    if (userAttack <= computerAttack) {
      computerPoints.textContent = +1;
    } else {
      playerPoints.textContent = +1;
    }
  } else {
    console.log("fighting fields are not populated!");
  }
};

combatButton.addEventListener("click", fight);
