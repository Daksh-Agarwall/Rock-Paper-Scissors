let randomnumber, res, final;
let score = JSON.parse(localStorage.getItem("score")) || {
		wins: 0,
		losses: 0,
		ties: 0,
	};
function updateScoreElement(){
	document.querySelector(".js-score")
		.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
updateScoreElement();
function playgame(playermove) {
	if (playermove == "Scissors") {
		computermove();
		console.log("Computer Move: ", res);
		if (res === "Scissors") final = "Tie";
		else if (res === "Rock") final = "You lose";
		else final = "You win";
	} else if (playermove === "Rock") {
		computermove();
		console.log("Computer Move: ", res);
		if (res === "Rock") final = "Tie";
		else if (res === "Paper") final = "You lose";
		else final = "You win";
	} else if (playermove === "Paper") {
		computermove();
		console.log("Computer Move: ", res);
		if (res === "Paper") final = "Tie";
		else if (res === "Scissors") final = "You lose";
		else final = "You win";
	}
	if (final === "You win") {
		score.wins += 1;
	} else if (final === "You lose") {
		score.losses += 1;
	} else if (final === "Tie") {
		score.ties += 1;
	}
	updateScoreElement();
	document.querySelector('.js-result')
		.innerHTML=`${final}`;
	document.querySelector('.js-moves')
		.innerHTML=`you
	<img src="Rock-Paper-Scissor/${playermove}-emoji.png" class="move-icon">
	<img src="Rock-Paper-Scissor/${res}-emoji.png" class="move-icon">
	computer`;
	localStorage.setItem("score", JSON.stringify(score));
}
function computermove() {
	randomnumber = Math.random();
	if (randomnumber >= 0 && randomnumber < 1 / 3) res = "Paper";
	else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) res = "Scissors";
	else if (randomnumber >= 2 / 3 && randomnumber < 1) res = "Rock";
}