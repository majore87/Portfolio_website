//New game button find by DOM
var newGameBtn = document.getElementById('js-newGameButton');

//New game listener
newGameBtn.addEventListener('click', newGame);

//pickButton find by DOM
var pickRock = document.getElementById("js-playerPick_rock"),
	pickPaper = document.getElementById("js-playerPick_paper"),
	pickScissors = document.getElementById("js-playerPick_scissors");

//Listener for pickButtons with function playerPick with specified parameter
pickRock.addEventListener('click', function() {playerPick('rock');});
pickPaper.addEventListener('click', function() {playerPick('paper');});
pickScissors.addEventListener('click', function() {playerPick('scissors');});