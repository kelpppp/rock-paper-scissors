// get computer choice: randomly return rock, paper, or scissors
function getComputerChoice() {
    // randomly generate a number from 1-3 and store in variable
    num = Math.floor(Math.random()*3) + 1;
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
    userChoice = prompt("Choose rock, paper, or scissors.");
    // return user input
    return userChoice;
}

// variable to keep track of computer score, initialized to 0
let computerScore = 0;
// variable to keep track of player score, initialized to 0
let humanScore = 0;

// plays a single round, taking human and computer choice as arguments
// increments the winner's score, and returns a winner announcement
function playRound(humanChoice, compChoice) {
    // if humanChoice and compChoice are the same, it's a tie
    if (humanChoice === compChoice) {
        // announce tie
        console.log(`It's a tie! You both chose ${compChoice}`);
    // else, if humanChoice is rock and compChoice is scissors, human wins
    } else if (humanChoice === "rock" && compChoice === "scissors" ||
            // or, if humanChoice is scissors and compchoice is paper, human wins
               humanChoice === "paper" && compChoice === "rock" ||
            // or, if humanChoice is paper and compChoice is rock, human wins
               humanChoice === "scissors" && compChoice === "paper"
    ) {
        // announce human as winner
        console.log(`You win! ${humanChoice} beats ${compChoice}.`);
        // increment player score
        humanScore++;
    // else, computer wins
    } else {
        // announce computer as winner
        console.log(`The computer wins! ${compChoice} beats ${humanChoices}`);
        // increment computer score
        compScore++;
    }
}

// define variable for human choice
let humanSelection = getHumanChoice();
// define variable for computer choice
let compSelection = getCompChoice();