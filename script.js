// randomly return rock, paper, or scissors
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

