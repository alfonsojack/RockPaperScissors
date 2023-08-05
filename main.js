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

function resetGame(){
  player1.wins = 0;
  player2.wins = 0
}

function removeChoices(){
  var gameChoices = document.querySelectorAll('.game-choice');
  for (var i=0; i<gameChoices.length; i++){
    gameChoices[i].remove();
  }
}

function addGameBoard(){
  var gameBoard = document.querySelector(".game-board");
  var rockImg = document.createElement('img');
  rockImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-rocks.png');
  rockImg.classList.add('game-piece')
  gameBoard.appendChild(rockImg);
  var paperImg = document.createElement('img');
  paperImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-paper.png');
  paperImg.classList.add('game-piece')
  gameBoard.appendChild(paperImg);
  var scissorsImg = document.createElement('img');
  scissorsImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-scissors.png');
  scissorsImg.classList.add('game-piece')
  gameBoard.appendChild(scissorsImg);
  
}