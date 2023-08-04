function createPlayer(nameInput, tokenChoice){
  var humanPlayer = {
    name: nameInput, 
    token: tokenChoice,
    wins: 0,
  }
  return humanPlayer
}

function createGame(){
  var player1 = createPlayer(nameInput, tokenChoice);
  var player2 = createPlayer("computer", computerToken);
  var players = [player1, player2]
  return players
}

function computerChoice(){
  var classicChoice = [rock, paper, scissors];
  var randomIndex = Math.floor(math.Random() * 3);
  var cpuChoiceClassic = classicChoice[randomIndex];
  return cpuChoiceClassic
}


function playGame(playerChoice){
  
  computerChoice();

  if (playerChoice === "rock" && cpuChoiceClassic === "scissors"){
    return win(player1)
  }
  if (playerChoice === "rock" && cpuChoiceClassic === "paper"){
    return win(player2)
  }


  if (playerChoice === "paper" && cpuChoiceClassic === "rock"){
    return win(player1)
  }
  if (playerChoice === "paper" && cpuChoiceClassic === "scissors"){
    return win(player2)
  }


  if (playerChoice === "scissors" && cpuChoiceClassic === "paper"){
    return win(player1)
  }
  if (playerChoice === "scissors" && cpuChoiceClassic === "rock"){
    return win(player2)
  }

  if (playerChoice === cpuChoiceClassic){
    return win(draw)
  }

}


function altfunction(playerChoice){
  var rock = {
    win: scissors,
    loss: paper,
  }
  var scissors = {
    win: paper, 
    loss: rock,
  }
  var paper = {
    win: rock,
    loss: scissors
  }
  computerChoice();
  if (playerChoice === cpuChoiceClassic){
    return win(draw)
  } else if (playerChoice.win === cpuChoiceClassic){
    return win(player1)
  } else if (playerChoice.loss === cpuChoiceClassic){
    return win(player2)
  }
}


function win(player){
  if (player === draw){
    return `draw`
  } else {
    return player.wins++
  }
}