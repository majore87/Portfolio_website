//Variables which indicates particular parts of the game
var newGameBtn = document.getElementById('js-newGameButton'),
	newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');
	console.log(newGameBtn);

//New game listener
// newGameBtn.addEventListener('click', newGame);

//pickButton find by DOM
var pickRock = document.getElementById("js-playerPick_rock"),
	pickPaper = document.getElementById("js-playerPick_paper"),
	pickScissors = document.getElementById("js-playerPick_scissors");

//Listener for pickButtons with function playerPick with specified parameter (rock, paper, scissor)
pickRock.addEventListener('click', function() {playerPick('rock');});
pickPaper.addEventListener('click', function() {playerPick('paper');});
pickScissors.addEventListener('click', function() {playerPick('scissors');});

//Initialize default values.
var gameState = 'notStarted',  //gameState is for customize display game elements
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};

//Function for game state

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

