players = [
  {
    name: "Paul",
    life: 50,
    experience: 10,
    WeapanPower: 5,
    ShieldPower: 5,

    attack: function () {
      return (
        this.experience + Math.floor(Math.random() * (this.WeapanPower + 1))
      );
    },

    defend: function () {
      return (
        this.experience + Math.floor(Math.random() * (this.ShieldPower + 1))
      );
    },
  },
  {
    name: "Samir",
    life: 50,
    experience: 7,
    WeapanPower: 7,
    ShieldPower: 4,
    attack: function () {
      return (
        this.experience + Math.floor(Math.random() * (this.WeapanPower + 1))
      );
    },
    defend: function () {
      return (
        this.experience + Math.floor(Math.random() * (this.ShieldPower + 1))
      );
    },
  },
  {
    name: "Sara",
    life: 50,
    experience: 3,
    WeapanPower: 3,
    ShieldPower: 8,
    attack: function () {
      return (
        this.experience + Math.floor(Math.random() * (this.WeapanPower + 1))
      );
    },
    defend: function () {
      return (
        this.experience + Math.floor(Math.random() * (this.ShieldPower + 1))
      );
    },
  },
  {
    name: "lili",
    life: 50,
    experience: 10,
    WeapanPower: 9,
    ShieldPower: 3,
    attack: function () {
      return (
        this.experience + Math.floor(Math.random() * (this.WeapanPower + 1))
      );
    },
    defend: function () {
      return (
        this.experience + Math.floor(Math.random() * (this.ShieldPower + 1))
      );
    },
  },
];

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

let results = {};
let notFinished = true;

function fightRound(attacker, defender) {
  results.attacker = attacker;
  results.defender = defender;
  if (results.attacker.attack() > results.defender.defend()) {
    results.winner = attacker;
    results.looser = defender;
    defender.life = defender.life - attacker.attack();
  } else {
    results.winner = defender;
    results.looser = attacker;
  }
  return results;
}

while (notFinished) {
  let activePlayers = players.filter((p) => p.life > 0);
  if (activePlayers.length == 1) {
    results.allTimeWinner = activePlayers;
    console.log(results.allFightWinner);
    notFinished = false;
    break;
  }
  results.attacker =
    activePlayers[Math.floor(Math.random() * activePlayers.length)];
  do {
    results.defender =
      activePlayers[Math.floor(Math.random() * activePlayers.length)];
  } while (results.defender === results.attacker);
  fightRound(results.attacker, results.defender);
}

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

console.table(players);
console.table(fightRound(players[0], players[1]));
console.table(players);
