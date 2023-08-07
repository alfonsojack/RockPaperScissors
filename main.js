
var classicGame = document.querySelector("#classic");
var classicGameBoard = document.querySelector(".game-board");
var topMessage = document.querySelector('.top-message');

classicGame.addEventListener('click', function(event){
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
  showSelections();
  console.log(playerChoice);
  console.log(cpuChoiceClassic);
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



function removeEvent(){
  classicGameBoard.removeEventListener('click', playGame, true)
}

function evaluateWins(winner){
  if (winner === 'draw') {
    topMessage.innerText = "It's a draw..."} else {
    winner.wins++;
    topMessage.innerText = `${winner.name} wins!`
    }
    updateScore();
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

}

function updateScore(){
var humanScore =  document.querySelector("#human-score");
var computerScore = document.querySelector("#computer-score");
humanScore.innerText = `Wins: ${player1.wins}`;
computerScore.innerText = `Wins: ${player2.wins}`;
}