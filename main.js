// UNIVERSAL VARIABLES

var gameChoice = document.querySelector('.game-choice');
var classicGameBoard = document.querySelector('.game-board');
var topMessage = document.querySelector('.top-message');
var bottomMessage = document.querySelector('.bottom-message');
var humanIcon = document.querySelector('#human-icon');
var chooseIcon = document.querySelector('.choose-icon');
var homeButton = document.querySelector('#home-button');
var resetScore = document.querySelector('#reset-score');
var clicked = false;

// EVENT LISTENERS

gameChoice.addEventListener('click', function(event) {
  var choice = event.target.closest('.game-choices');
  createGame(choice.id);
  createPlayer();
  removeChoices();
  addGameBoard();
}
);

chooseIcon.addEventListener('click', function(event) {
  var altIcon = event.target.closest('.icon');
  chooseAltIcon(altIcon.innerText);
}
);

classicGameBoard.addEventListener('click', function(event) {
  if(clicked === false) {
    playGame(event.target.id);
  }
}
);

homeButton.addEventListener('click', function() {
  location.reload();
}  
);

resetScore.addEventListener('click', function() {
  resetScores();
  updateScore();
}
);

// DATA MODEL

var gameTokens = {
  rock: {
    name: 'rock',
    win: ['scissors', 'lizard'],
    loss: ['paper', 'alien']
  },

  scissors: {
    name: 'scissors',
    win: ['paper', 'lizard'],
    loss: ['rock', 'alien'],
  },

  paper: {
    name: 'paper',
    win: ['rock', 'alien'],
    loss: ['scissors', 'lizard']
  },

  lizard: {
    name: 'lizard',
    win: ['paper', 'alien'],
    loss: ['rock', 'scissors'],
  },

  alien: {
    name: 'alien',
    win: ['scissors', 'rock'],
    loss: ['lizard', 'paper'],
  },  
};

var gameState = {
  type: '',
};

var player1 = {};

var player2 = {
  name: 'Computer',
  wins: 0,
  selection: '',
};

// FUNCTIONS 

function chooseAltIcon(emoji) {
  humanIcon.innerText = emoji;
};

function createPlayer() {
  var nameEntered = document.querySelector('.input');

  player1 = {
    name: nameEntered.value || 'Human', 
    wins: 0,
    selection: '',
  };
  
  return player1;
};

function createGame(type) {
  gameState.type = type;
  
  return gameState;
};

function resetScores() {
  player1.wins = 0;
  player2.wins = 0;
};

function getRandomIndex() {

  var randomIndex = Math.floor(Math.random() * 3);
  
  if(gameState.type === 'difficult') {
    randomIndex = Math.floor(Math.random() * 5);
  };
  
  return randomIndex;
};

function computerChoice() {
  var classicChoice = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
  var cpuChoiceClassic = classicChoice[getRandomIndex()];
  
  return cpuChoiceClassic;
}

function playGame(playerChoice) {
  var cpuChoiceClassic = computerChoice();
  player1.selection = playerChoice;
  player2.selection = cpuChoiceClassic;
  showSelections();
  
  if (playerChoice === cpuChoiceClassic) {
    return evaluateWins('draw');
  };

  if (gameTokens[playerChoice].win.includes(cpuChoiceClassic)) {
    return evaluateWins(player1);
  };

  if (gameTokens[playerChoice].loss.includes(cpuChoiceClassic)) {
    return evaluateWins(player2);
  };
};

function showSelections() {
  var gamePieces = document.querySelectorAll('.game-piece');
  
  for (var i = 0; i < gamePieces.length; i++) {
    
    if(gamePieces[i].id === player1.selection) {
      var player1Piece = document.createElement('figcaption');
      var player1Node = document.createTextNode(humanIcon.innerText);
      player1Piece.appendChild(player1Node);
      player1Piece.classList.add('caption');
      gamePieces[i].appendChild(player1Piece);
    };
    
    if (gamePieces[i].id === player2.selection) {
      var cpuIcon = document.querySelector('#cpu-icon');
      var player2Piece = document.createElement('figcaption');
      var player2Node = document.createTextNode(cpuIcon.innerText);
      player2Piece.classList.add('caption');
      player2Piece.appendChild(player2Node);
      gamePieces[i].appendChild(player2Piece);    
    };
  };
  clicked = true;
  setTimeout(addGameBoard, 1100);
};

function evaluateWins(winner) {
  if (winner === 'draw') {
    topMessage.innerText = `It's a draw... `;
  } else {
    winner.wins++;
    topMessage.innerText = `${winner.name} wins!`;
  }
  bottomMessage.innerText = 'Setting up next round...';
  updateScore();
};


function removeChoices() {
  var difficultyChoices = document.querySelectorAll('.game-choice');
  var humanName = document.querySelector('.human-name');
  var input = document.querySelector('.input');
  humanName.innerText = player1.name;
  input.classList.add('hide');
  chooseIcon.classList.add('hide');
  
  for (var i = 0; i < difficultyChoices.length; i++){
    difficultyChoices[i].remove();
  }
};


function addGameBoard() {
  classicGameBoard.innerHTML = '';
  clicked = false;
  topMessage.innerText = 'Choose your fighter!';
  bottomMessage.innerText = 'Classic Mode';
  homeButton.classList.remove('hide');
  resetScore.classList.remove('hide');

  var rockFig = document.createElement('figure');
  rockFig.classList.add('game-piece');
  rockFig.setAttribute('id', 'rock');
  var rockImg = document.createElement('img');
  rockImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-rocks.png');
  rockImg.setAttribute('id', 'rock');
  classicGameBoard.appendChild(rockFig);
  rockFig.appendChild(rockImg);
  
  
  var paperFig = document.createElement('figure');
  paperFig.classList.add('game-piece');
  paperFig.setAttribute('id', 'paper');
  var paperImg = document.createElement('img');
  paperImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-paper.png');
  paperImg.setAttribute('id', 'paper');
  classicGameBoard.appendChild(paperFig);
  paperFig.appendChild(paperImg);
  
  var scissorsFig = document.createElement('figure');
  scissorsFig.classList.add('game-piece');
  scissorsFig.setAttribute('id', 'scissors');
  var scissorsImg = document.createElement('img');
  scissorsImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-scissors.png');
  scissorsImg.setAttribute('id', 'scissors');
  classicGameBoard.appendChild(scissorsFig);
  scissorsFig.appendChild(scissorsImg);

  if (gameState.type === 'difficult') {
    
    var lizFig = document.createElement('figure');
    lizFig.classList.add('game-piece');
    lizFig.setAttribute('id', 'lizard');
    var lizImg = document.createElement('img');
    lizImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/lizard-icon-33207.png');
    lizImg.setAttribute('id', 'lizard');
    classicGameBoard.appendChild(lizFig);
    lizFig.appendChild(lizImg);

    var alienFig = document.createElement('figure');
    alienFig.classList.add('game-piece');
    alienFig.setAttribute('id', 'alien');
    var alienImg = document.createElement('img');
    alienImg.setAttribute('src', '/Users/jack/home/turing_work/1mod/project5/black-and-white-alien.png');
    alienImg.setAttribute('id', 'alien');
    classicGameBoard.appendChild(alienFig);
    alienFig.appendChild(alienImg);

    bottomMessage.innerText = 'Difficult Mode';
  }
};

function updateScore() {
  var humanScore =  document.querySelector('.human-score');
  var computerScore = document.querySelector('.computer-score');
  humanScore.innerText = `Wins: ${player1.wins}`;
  computerScore.innerText = `Wins: ${player2.wins}`;
};

