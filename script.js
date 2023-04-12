const choices = ['rock', 'paper', 'scissors']

const buttons = document.querySelectorAll('button');
const playerScoreDiv = document.querySelector('div.player-score');
const computerScoreDiv = document.querySelector('div.computer-score');

const rounds = document.querySelector('div.rounds');
const finalScoreDiv = document.querySelector('div.final');

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    winner = calcWinner(playerSelection, computerSelection)
    let outcome = "You chose " + playerSelection + " and computer chose " + computerSelection + ". ";
    switch(winner) {
        case("player"):
            return {
                "winner": "player",
                "outcome": outcome + "You won!"
            };
        case("computer"):
            return {
                "winner": "computer",
                "outcome": outcome + "You lost!"
            };
        case("draw"):
            return {
                "winner": "draw",
                "outcome": outcome + "It was a tie!"
            };
    }
}

function updateResults(results){
    if (roundsPlayed < 5){
        let winner = results["winner"];
        if (winner === "player") {
            playerScore += 1;
            const div = document.createElement('div');
            div.textContent = "Round " + (roundsPlayed + 1) + " results: " + results["outcome"];
            rounds.appendChild(div);
        } else if (winner == "computer"){
            computerScore += 1;
            const div = document.createElement('div');
            div.textContent = "Round " + (roundsPlayed + 1) + " results: " + results["outcome"];
            rounds.appendChild(div);
        } else {
            const div = document.createElement('div');
            div.textContent = "Round " + (roundsPlayed + 1) + " results: " + results["outcome"];
            rounds.appendChild(div);
        }
        roundsPlayed++;
    }
    if (roundsPlayed == 5) {
        let overallOutcome = "Final Outcome: ";
        if (playerScore > computerScore){
            finalScoreDiv.textContent = overallOutcome + "You won! Congratulations";
        } else if (computerScore > playerScore){
            finalScoreDiv.textContent = overallOutcome + "You lost! Better luck next time";
        } else {
            finalScoreDiv.textContent = overallOutcome + "It was a draw!";
        }
    }
    playerScoreDiv.textContent = "Player Score: " + playerScore;
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
}

function calcWinner(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    const p = "player"
    const c = "computer"
    const d = "draw"
    // Player chooses rock
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return p
    }
    if (playerSelection == "rock" && computerSelection == "paper"){
        return c
    }
    if (playerSelection == "rock" && computerSelection == "rock"){
        return d
    }
    // Player chooses paper
    if (playerSelection == "paper" && computerSelection == "scissors"){
        return c
    }
    if (playerSelection == "paper" && computerSelection == "paper"){
        return d
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        return p
    }

    // Player choses scissors
    if (playerSelection == "scissors" && computerSelection == "scissors"){
        return d
    }
    if (playerSelection == "scissors" && computerSelection == "paper"){
        return p
    }
    if (playerSelection == "scissors" && computerSelection == "rock"){
        return c
    }
    return "Invalid Input"
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let results = playRound(button.value)
        updateResults(results);
      });
});
