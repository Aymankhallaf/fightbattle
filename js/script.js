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
    life: 0,
    experience: 7,
    WeapanPower: 7,
    ShieldPower: 4,
  },
  {
    name: "Sara",
    life: 50,
    experience: 3,
    WeapanPower: 3,
    ShieldPower: 8,
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

// /**
//  * get the Tournament Winner by unsing two functions isGameOver() and getActivePlayers().
//  * @param {object} activePlayers an object of active players
//  * @returns {object} object of the winner/winners.
//  */
// function getTournamentWinner(tournementResults) {
//     let tournementResults=[];
//     let tournementResults.winner={};
//   return tournementResults[
//     tournementResults.winner[tournementResults.length - 1]
//   ];
// }

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




console.log(attackRandom(players[0]));

function getFightResult(attackerAndDefender) {
  let fightResult = {};
  fightResult.attacker = attackerAndDefender[0];
  fightResult.defender = attackerAndDefender[1];
  fightResult.attacker.attackPoints = attackRandom(fightResult.attacker);

  fightResult.defender.defendPoints = defendRandom(fightResult.defender);
  if (fightResult.defender.attackPoints > fightResult.defender.defendPoints) {
    fightResult.winner = fightResult.attacker;
    fightResult.looser = fightResult.defender;
    fightResult.defender.life -= fightResult.attacker.attackPoints;
  } else {
    fightResult.winner = fightResult.defender;
    fightResult.looser = fightResult.attacker;
  }
 
  return fightResult;
}




tournementResults = [];
let activePlayers = players;
while (!isGameOver(activePlayers)) {
  let attackerAndDefender = getRandomAttackerAndDefender(activePlayers);
  let result = getFightResult(attackerAndDefender);
  tournementResults.push(result);
  activePlayers = getActivePlayers(players);
}

//raw data
console.table(tournementResults);
console.table(players);

let showAllResult = [];
for (let result of tournementResults) {
  let showResult = {
    "Attacker name": result.attacker.name,
    "Defender name": result.defender.name,
    "winner name": result.winner.name,
    "looser name": result.looser.name,
    "attack Points": result.attacker.attackPoints,
    "defend points": result.defender.defendPoints,
    "attaker life": result.attacker.life,
    "defender life": result.defender.life,
  };
  

  showAllResult.push(showResult);
}

console.table(showAllResult);

// while (!isGameOver(players)) {
//   getTournamentWinner(activePlayers);
//   let attackerAndDefender = getRandomAttackerAndDefender(activePlayers);
//   getWinnerAndLooser(attackerAndDefender);
//   tournementResults.push(getfightRoundResult(attackerAndDefender));
//   console.log(isGameOver);
//   getActivePlayers(players);
// }
// console.table(tournementResults);

// while (notFinished) {
//   let activePlayers = players.filter((p) => p.life > 0);
//   if (activePlayers.length == 1) {
//     allResult.allTimeWinner = activePlayers;
//     console.log(allResult.allFightWinner);
//     notFinished = false;
//     break;
//   }
//   results.attacker =
//     activePlayers[Math.floor(Math.random() * activePlayers.length)];
//   do {
//     results.defender =
//       activePlayers[Math.floor(Math.random() * activePlayers.length)];
//   } while (results.defender === results.attacker);
//   checkRoundWinner(results.attacker, results.defender);
// }

// console.table(players);
// console.table(allResult);

// results = [{players:{}, playersOut{}, attacker: "samir", defender: "lili", winner: "samir" }];

// function attack(p) {
//   return p.experience + Math.floor(Math.random() * (p.WeapanPower + 1));
// }

// function defend(p) {
//   return p.experience + Math.floor(Math.random() * (p.ShieldPower + 1));
// }

// function attackResult(p1, p2) {
//   return attack(p1) > defend(p2) ? p2.life - attack(p1) : 0;
// }

// notFinished = true;
// let results = {};

// function randomPlayerChoice(pLst) {}

// notFinished = true;
// let results = {};
// let roundNumber = 0;
// while (notFinished) {
//   let activePlayers = players.filter((p) => p.life > 0);
//   results[roundNumber][players] = activePlayers;
//   let winner = {};
//   results[winner] = winner;
//   let attacker = {};
//   if (activePlayers.length == 1) {
//     winner = activePlayers;
//     console.log(winner);
//     notFinished = false;
//     break;
//   }

//   console.log("ok");
//   break;
//   roundNumber++;
// }
