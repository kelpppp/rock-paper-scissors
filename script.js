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
computerScore = 0;
// variable to keep track of player score, initialized to 0
humanScore = 0;



