//Variables which indicates particular parts of the game
var newGameBtn = document.getElementById('js-newGameButton'),
	newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');
	console.log(newGameBtn);

//New game listener
newGameBtn.addEventListener('click', newGame);

//pickButton find by DOM
var pickRock = document.getElementById("js-playerPick_rock"),
	pickPaper = document.getElementById("js-playerPick_paper"),
	pickScissors = document.getElementById("js-playerPick_scissors");

//Listener for pickButtons with function playerPick with specified parameter (rock, paper, scissor)
pickRock.addEventListener('click', function() {playerPick('Rock');});
pickPaper.addEventListener('click', function() {playerPick('Paper');});
pickScissors.addEventListener('click', function() {playerPick('Scissors');});

//Variables from result Table
var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

//Initialize default values.
var gameState = 'notStarted',  //gameState is for customize display game elements
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};

//Function for game state /started/ended/notStarted
function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'flex';
			resultsElem.style.display = 'block';
		break;
		case 'ended':
			newGameBtn.innerText = 'One more time';
		case 'notStarted':
		default:
			newGameElem.style.display = 'flex';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}

setGameElements();

//After click on newGameBtn we can type name and set gameState to started
function newGame() {
	player.name = prompt('Type Your name');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}

//Random pick for computer
function getComputerPick() {
	var randomPicks = ['Rock', 'Paper', 'Scissors'];
	return randomPicks[Math.floor(Math.random()*3)];
}

//Variables from results table
var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult');

//Function for set description for computer and players pick
function playerPick(playerPick) {
	var computerPick = getComputerPick();
	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
}

// Winner logic, default player is a winner and function check this.
function checkRoundWinner(playerPick, computerPick) {
	playerResultElem = computerResultElem = '';

	var winnerIs = 'player';
	if (playerPick == computerPick) {
		winnerIs = 'none';
	}
	else if (
		(playerPick == 'Scissors' && computerPick == 'Rock') ||
		(playerPick == 'Rock' && computerPick == 'Paper') ||
		(playerPick == 'Paper' && computerPick == 'Scissors')) {
		winnerIs = 'computer';
	}

	if (winnerIs == 'player') {
		playerResultElem.innerHTML = 'Win!';
		player.score++;
	}
	else if (winnerIs == 'computer') {
		computerResultElem.innerHTML = 'Win!';
		computer.score++;
	}
	setGamePoints();
}
//Update score for player and computer
function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;

	endGame();
}

//End Game alerts when computer or player receive 10 points
function endGame() {
	if (player.score > 9 || computer.score > 9) {
			if (player.score > computer.score) {
				alert("Your score: " + player.score + " points!" + " You are like a Neo in Matrix! You really can defeat the program.");
			}
			else
				alert("You have failed! Your score: " + player.score + " points." + " Program will launch Skynet in 3 seconds...");
		gameState = 'ended';
		setGameElements();
	}
}

