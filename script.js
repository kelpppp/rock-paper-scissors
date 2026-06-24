// get computer choice: randomly return rock, paper, or scissors
function getCompChoice() {
    // randomly generate a number from 1-3 and store in variable
    let num = Math.floor(Math.random()*3) + 1;
    // if number is 1, return "rock"
    if (num === 1) {
        return "rock";
    // if number is 2, return "paper"
    } else if (num === 2) {
        return "paper";
    // if number is 3, return "scissors"
    } else {
        return "scissors";
    }
}

// get human choice: return rock, paper, or scissors based on user input
function getHumanChoice() {
    // ask for and get user's input, store in variable
    let userChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    // return user input
    return userChoice;
}

// plays a single round, taking human and computer choice as arguments
// increments the winner's score, and returns a winner announcement
function playRound(humanChoice, compChoice) {
    // if humanChoice and compChoice are the same, it's a tie
    if (humanChoice === compChoice) {
        // announce tie
        console.log(`It's a tie! You both chose ${compChoice}`);
        // indicate tie with return value of "tie"
        return "tie";
    // else, if humanChoice is rock and compChoice is scissors, human wins
    } else if (humanChoice === "rock" && compChoice === "scissors" ||
            // or, if humanChoice is scissors and compChoice is paper, human wins
               humanChoice === "paper" && compChoice === "rock" ||
            // or, if humanChoice is paper and compChoice is rock, human wins
               humanChoice === "scissors" && compChoice === "paper"
    ) {
        // announce human as winner
        console.log(`You win! ${humanChoice} beats ${compChoice}.`);
        // indicate player won with return value of "human"
        return "human";
    // else, computer wins
    } else {
        // announce computer as winner
        console.log(`The computer wins! ${compChoice} beats ${humanChoice}`);
        // indicate computer won with return value of "computer"
        return "computer";
    }
}

// play five rounds of the game
function playGame() {
    
    // announce game
    console.log("Welcome to rock, paper, scissors!");

    // variable to keep track of player score, initialized to 0
    let humanScore = 0;
    // variable to keep track of computer score, initialized to 0
    let compScore = 0;

    for (let i = 1; i < 6; i++) {

        // announce round number
        console.log(`Round ${i}:`);

        // define variable for human choice
        const humanSelection = getHumanChoice();
        // define variable for computer choice
        const compSelection = getCompChoice();

        // call playRound() to play one round
        let winner = playRound(humanSelection, compSelection);

        // increment scores based on winner
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            compScore++;
        }

        // announce scores at the end of a round
        console.log(`Your score is ${humanScore}. The computer's score is ${compScore}.`);
    }

    // announce winner of game overall
    if (humanScore > compScore) {
        console.log("Game over - you won!");
    } else if (compScore > humanScore) {
        console.log("Game over - computer won!");
    } else {
        console.log("Game over - it's a tie!");
    }

}

// run function playGame()
playGame();

