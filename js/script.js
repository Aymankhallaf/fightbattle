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
 * Calcule an attack random  the equation,
 * (experience of player + random number from 0 until weapon power),
 * @param {object} attacker player in object form has experience and Weapan Power properties.
 * @returns {number} a random attack points.
 */
function attackRandom(attacker) {
  return attacker.experience + getRandomValue(attacker.WeapanPower);
}

/**
 * Calcule an defence random  the equation,
 * (experience of player + random number from 0 until shield power).
 * @param {object} defender a player in object form has experience and shield Power properties.
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
 * @param {object} players of object of players has life propertie.
 * @returns {object} the active player.
 */
function getActivePlayers(players) {
  return players.filter((p) => p.life > 0);
}

/**
 * get ranodm attacker and players (it can't be thE same personage).
 * @param {object} activePlayers a list of active players.
 * @returns {array} [attacker, defender].
 */
function getRandomAttackerAndDefender(activePlayers) {
  let attacker = getRandomArrayValue(activePlayers);
  let defender;
  do {
    defender = getRandomArrayValue(activePlayers);
  } while (defender === attacker || defender === undefined);
  return [attacker, defender];
}

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
