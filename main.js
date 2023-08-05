var rock = {
  name: "rock",
  win: "scissors",
  loss: "paper",
}
var scissors = {
  name: "scissors",
  win: "paper", 
  loss: "rock",
}
var paper = {
  name: "paper",
  win: "rock",
  loss: "scissors"
}

var player1 = {};

var player2 = {
  name: 'Computer',
  wins: 0
};

function createPlayer(nameInput){
  player1 = {
    name: nameInput, 
    wins: 0,
  }
  return player1
}

// function createGame(nameInput){
//   var game = {
//     player1: createPlayer(nameInput),
//     player2: createPlayer("computer"),
//   }
//   return game
// }

function getRandomIndex(){
  var randomIndex = Math.floor(Math.random() * 3);
  return randomIndex
}

function computerChoice(){
  var classicChoice = ["rock", "paper", "scissors"];
  var cpuChoiceClassic = classicChoice[getRandomIndex()];
  return cpuChoiceClassic
}



function playGame(playerChoice){
  var cpuChoiceClassic = computerChoice()
  console.log(playerChoice);
  console.log(cpuChoiceClassic);
  if (playerChoice.name === cpuChoiceClassic){
    return 'draw'
  }
  if (playerChoice.win === cpuChoiceClassic){
    return player1.wins++
  }
  if (playerChoice.loss === cpuChoiceClassic){
    return player2.wins++
  }
}

