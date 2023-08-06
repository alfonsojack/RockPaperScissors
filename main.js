
var classicGame = document.querySelector("#classic");
var classicGameBoard = document.querySelector(".game-board");
// var gamePieces = classicGameBoard.children; 
// for (var i = 0; i < gamePieces.length; i++){
//   var classicPieces = gamePieces[i];
// }

classicGame.addEventListener('click', function(event){
  createPlayer();
  removeChoices();
  addGameBoard();

}
)


classicGameBoard.addEventListener('click', function(event){
  playGame(event.target.id);
  console.log(player1);
  console.log(player2);
}
)


var classicPieces = {
rock: {
  name: "rock",
  win: "scissors",
  loss: "paper",
},
scissors: {
  name: "scissors",
  win: "paper",
  loss: "rock",
},
paper: {
  name: "paper",
  win: "rock",
  loss: "scissors",
}
}

var player1 = {
};


var player2 = {
  name: 'Computer',
  wins: 0,
  selection: ""
};

function createPlayer(nameInput){
  player1 = {
    name: nameInput || 'Human', 
    wins: 0,
    selection: ""
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
  player1.selection = playerChoice;
  player2.selection = cpuChoiceClassic;
  if (classicPieces[playerChoice].name === cpuChoiceClassic){
    return evaluateWins('draw')
  }
  if (classicPieces[playerChoice].win.includes(cpuChoiceClassic)){
    return evaluateWins(player1)
  }
  if (classicPieces[playerChoice].loss.includes(cpuChoiceClassic)){
    return evaluateWins(player2)
  }
}

function evaluateWins(winner){
  var gamePieces = document.querySelectorAll('.game-piece');
  for (var i=0; i<gamePieces.length; i++){
    if(gamePieces[i].id != player1.selection && gamePieces[i].id != player2.selection){
        gamePieces[i].classList.add("hide")
    }
    console.log(`${winner.name} wins!`)
  }
  // var player1Selection = document.querySelector(player1.selection);
  // var player2Selection = document.querySelector(player2.selection);
  // player1Selection.classList.remove("hide");
  // player2Selection.classList.remove("hide");

  if (winner === 'draw') {
    console.log('draw')} else {
    winner.wins++;
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
  rockImg.classList.add('game-piece');
  rockImg.setAttribute('id', 'rock');
  gameBoard.appendChild(rockImg);
  
  var paperImg = document.createElement('img');
  paperImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-paper.png');
  paperImg.classList.add('game-piece')
  paperImg.setAttribute('id', 'paper');
  gameBoard.appendChild(paperImg);
  
  var scissorsImg = document.createElement('img');
  scissorsImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-scissors.png');
  scissorsImg.classList.add('game-piece');
  scissorsImg.setAttribute('id', 'scissors');
  gameBoard.appendChild(scissorsImg);
}