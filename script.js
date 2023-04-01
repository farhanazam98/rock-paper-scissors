console.log("Hello World");

const choices = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    winner = chooseWinner(playerSelection, computerSelection)
    switch(winner) {
        case("player"):
            return "You win! " + playerSelection + " beats" + computerSelection;
        case("computer"):
            return "You lose! " + computerSelection + " beats" + playerSelection;
        case("draw"):
            return "Draw! You both chose " + computerSelection;
    }
}

function chooseWinner(playerSelection, computerSelection){
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
