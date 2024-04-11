/**
 * Return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
  return Math.floor(Math.random() * (max + 1));
}

/**
 * Gets a random value from an array
 * @param {array} array of datas
 * @returns {*} - a random value
 */
function getRandomArrayValue(array) {
  return array[getRandomValue(array.length - 1)];
}

players = [
  {
    name: "Paul",
    life: 50,
    experience: 10,
    WeapanPower: 5,
    ShieldPower: 5,
  },
  {
    name: "Samir",
    life: 50,
    experience: 7,
    WeapanPower: 7,
    ShieldPower: 4,
  },
  {
    name: "Sara",
    life: 50,
    experience: 1,
    WeapanPower: 1,
    ShieldPower: 1,
  },
  {
    name: "lili",
    life: 50,
    experience: 10,
    WeapanPower: 9,
    ShieldPower: 3,
  },
];

let allResult = [];

let notFinished = true;

/**
 * Calcule an attack random from this equation
 * (experience of player + random number from 0 until weapon power),
 * @param {object} attacker player in object must have experience and Weapan Power properties ex. player1.experience.
 * @returns {number} a random attack points.
 */
function attackRandom(attacker) {
  return attacker.experience + getRandomValue(attacker.WeapanPower);
}

/**
 * Calcule a defence random from this equation,
 * (experience of player + random number from 0 until shield power).
 * @param {object} defender a player in object form must have experience and shield Power properties ex. player1.ShieldPower.
 * @returns {number} a random defence points.
 */
function defendRandom(defender) {
  return defender.experience + getRandomValue(defender.ShieldPower);
}

/**
 * check if the game is over by checking the number of activeplayer;
 * @param {object} activePlayers object of players;
 * @returns {boolean} return true (when there are only one active player) or false;
 */
function isGameOver(activePlayers) {
  return activePlayers.length === 1;
}

/**
 * returns a list of players have life more than 0;
 * @param {object} players of object of players has life propertie ex. player.life.
 * @returns {object} the active player.
 */
function getActivePlayers(players) {
  return players.filter((p) => p.life > 0);
}

/**
 * get ranodm attacker and players (it can't be the same personage).
 * @param {object} activePlayers a list of active players.
 * @returns {array} attacker object and defender in array  .
 */
function getRandomAttackerAndDefender(activePlayers) {
  let attacker = getRandomArrayValue(activePlayers);
  let defender;
  do {
    defender = getRandomArrayValue(activePlayers);
  } while (defender === attacker || defender === undefined);
  return [attacker, defender];
}

/**
 * return the result of fight between two players
 * @param {array} attackerAndDefender  array of two player object (they must have these properties like ex. {name: "Sara",
    life: 50,
    experience: 1,
    WeapanPower: 1,
    ShieldPower: 1, })
 * @returns {object} the result of fight  {
    "Attacker name": attacker.name,
    "Defender name": defender.name,
    "winner name": winner,
    "looser name": looser,
    "attack Points": attackPoints,
    "defend points": defendPoints,
    "attaker life": attacker.life,
    "defender life": defender.life,
  }
 */
function getFightResult(attackerAndDefender) {
  let winner = "";
  let looser = "";
  let attacker = attackerAndDefender[0];
  let defender = attackerAndDefender[1];
  let attackPoints = attackRandom(attacker);
  let defendPoints = defendRandom(defender);
  if (attackPoints > defendPoints) {
    winner = attacker.name;
    looser = defender.name;
    defender.life -= attackPoints;
  } else {
    winner = defender.name;
    looser = attacker.name;
  }
  return {
    "Attacker name": attacker.name,
    "Defender name": defender.name,
    "winner name": winner,
    "looser name": looser,
    "attack Points": attackPoints,
    "defend points": defendPoints,
    "attaker life": attacker.life,
    "defender life": defender.life,
  };
}



function getMaxNameOfLst(list, scoreFieldname) {
  let maxValue;
  let name = "";
  for (const obj of list) {
    if (obj[scoreFieldname] > maxValue || maxValue === undefined) {
      maxValue = obj[name];
      name = obj.name;
    }
  }
  return name;
}

// game
console.table(players);
tournementResults = [];
let activePlayers = players;
while (!isGameOver(activePlayers)) {
  let attackerAndDefender = getRandomAttackerAndDefender(activePlayers);
  let result = getFightResult(attackerAndDefender);
  tournementResults.push(result);
  activePlayers = getActivePlayers(players);
}

console.table(tournementResults);
console.table(players);

console.log("winner name", getMaxNameOfLst(players, "life"));
