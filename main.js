
var gameChoice = document.querySelector(".game-choice");
var classicGameBoard = document.querySelector(".game-board");
var topMessage = document.querySelector('.top-message');

gameChoice.addEventListener('click', function(event){
  var choice = event.target.closest('.game-choices');
  createGame(choice.id);
  createPlayer();
  removeChoices();
  addGameBoard();
}
)

classicGameBoard.addEventListener('click', function(event){
  playGame(event.target.id);
}
)

var classicPieces = {
rock: {
  name: "rock",
  win: ["scissors", "lizard"],
  loss: ["paper", "alien"]
},
scissors: {
  name: "scissors",
  win: ["paper", "lizard"],
  loss: ["rock", "alien"],
},
paper: {
  name: "paper",
  win: ["rock", "alien"],
  loss: ["scissors", "lizard"]
},
lizard: {
  name: "lizard",
  win: ["paper", "alien"],
  loss: ["rock", "scissors"],
},
alien: {
  name: "alien",
  win: ["scissors", "rock"],
  loss: ["lizard", "paper"],
}
  
}

var gameState = {
  type: "",
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

function createGame(type){
  gameState.type = type;
  return gameState
}

function getRandomIndex(){

  var randomIndex = Math.floor(Math.random() * 3);
  
  if(gameState.type === "difficult") {
    randomIndex = Math.floor(Math.random() * 5);
  }
  return randomIndex
}

function computerChoice(){
  var classicChoice = ["rock", "paper", "scissors", "alien", "lizard"];
  var cpuChoiceClassic = classicChoice[getRandomIndex()];
  return cpuChoiceClassic
}


function playGame(playerChoice){
  var cpuChoiceClassic = computerChoice()
  player1.selection = playerChoice;
  player2.selection = cpuChoiceClassic;
  showSelections();
  if (playerChoice === cpuChoiceClassic){
    return evaluateWins('draw')
  }
  if (classicPieces[playerChoice].win.includes(cpuChoiceClassic)){
    return evaluateWins(player1)
  }
  if (classicPieces[playerChoice].loss.includes(cpuChoiceClassic)){
    return evaluateWins(player2)
  }
}


function showSelections(){
  var gamePieces = document.querySelectorAll('.game-piece');
  for (var i=0; i<gamePieces.length; i++){
    if(gamePieces[i].id === player1.selection) {
      var player1Piece = document.createElement('figcaption');
      var player1Node = document.createTextNode(`${player1.name}`);
      player1Piece.appendChild(player1Node);
      player1Piece.classList.add('caption')
      gamePieces[i].appendChild(player1Piece);
    }
    if (gamePieces[i].id === player2.selection) {
      var player2Piece = document.createElement('figcaption');
      var player2Node = document.createTextNode(`${player2.name}`);
      player2Piece.classList.add('caption');
      player2Piece.appendChild(player2Node);
      gamePieces[i].appendChild(player2Piece);
      
    }

}
setTimeout(addGameBoard, 2500)
}

function evaluateWins(winner){
  if (winner === 'draw') {
    topMessage.innerText = "It's a draw..."} else {
    winner.wins++;
    topMessage.innerText = `${winner.name} wins!`
    }
    updateScore();
}


function removeChoices(){
  var gameChoices = document.querySelectorAll('.game-choice');
  for (var i=0; i<gameChoices.length; i++){
    gameChoices[i].remove();
  }
}


function addGameBoard(){
  classicGameBoard.innerHTML = "";
  var rockImg = document.createElement('img');
  var rockFig = document.createElement('figure');
  rockImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-rocks.png');
  rockFig.classList.add('game-piece');
  rockFig.setAttribute('id', 'rock');
  rockImg.setAttribute('id', 'rock');
  classicGameBoard.appendChild(rockFig);
  rockFig.appendChild(rockImg);
  
  var paperImg = document.createElement('img');
  var paperFig = document.createElement('figure');
  paperImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-paper.png');
  paperFig.classList.add('game-piece');
  paperFig.setAttribute('id', 'paper');
  paperImg.setAttribute('id', 'paper');
  classicGameBoard.appendChild(paperFig);
  paperFig.appendChild(paperImg);
  
  var scissorsImg = document.createElement('img');
  var scissorsFig = document.createElement('figure');
  scissorsImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-scissors.png');
  scissorsFig.classList.add('game-piece');
  scissorsFig.setAttribute('id', 'scissors');
  scissorsImg.setAttribute('id', 'scissors');
  classicGameBoard.appendChild(scissorsFig);
  scissorsFig.appendChild(scissorsImg);

  topMessage.innerText = "Choose your fighter!";

  if (gameState.type === "difficult"){
    
    var lizImg = document.createElement('img');
    var lizFig = document.createElement('figure');
    lizImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/lizard-icon-33207.png');
    lizFig.classList.add('game-piece');
    lizFig.setAttribute('id', 'lizard');
    lizImg.setAttribute('id', 'lizard');
    classicGameBoard.appendChild(lizFig);
    lizFig.appendChild(lizImg);

    var alienImg = document.createElement('img');
    var alienFig = document.createElement('figure');
    alienImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-alien.png');
    alienFig.classList.add('game-piece');
    alienFig.setAttribute('id', 'alien');
    alienImg.setAttribute('id', 'alien');
    classicGameBoard.appendChild(alienFig);
    alienFig.appendChild(alienImg);

  }

}

function updateScore(){
var humanScore =  document.querySelector("#human-score");
var computerScore = document.querySelector("#computer-score");
humanScore.innerText = `Wins: ${player1.wins}`;
computerScore.innerText = `Wins: ${player2.wins}`;
}