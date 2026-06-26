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

// plays a single round, taking human and computer choice as arguments
// increments the winner's score, and returns a winner announcement
function playRound(humanChoice, compChoice) {

    if (humanChoice === compChoice) {
        div.textContent = `It's a tie! You both chose ${compChoice}`;
    } else if (humanChoice === "rock" && compChoice === "scissors" ||
               humanChoice === "paper" && compChoice === "rock" ||
               humanChoice === "scissors" && compChoice === "paper"
    ) {
        div.textContent = `You win! ${humanChoice} beats ${compChoice}.`;
        humanScore++;
    } else {
        div.textContent = `The computer wins! ${compChoice} beats ${humanChoice}`;
        compScore++;
    }

    if (humanScore === 5 || compScore === 5) {
        score.textContent = humanScore === 5 ? "You win the game!" : "Computer won the game!";
        humanScore = 0;
        compScore = 0;
    } else {
        score.textContent = `Your score: ${humanScore}. Computer score: ${compScore}`;
    }
    

}

let humanScore = 0;
let compScore = 0;

const scissorBtn = document.createElement("button");
scissorBtn.textContent = "scissors";
const rockBtn = document.createElement("button");
rockBtn.textContent = "rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "paper";

document.body.appendChild(scissorBtn);
document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);

const div = document.createElement("div");
const score = document.createElement("div");
const final = document.createElement("div");

document.body.appendChild(div);
document.body.appendChild(score);
document.body.appendChild(final);

scissorBtn.addEventListener("click", () => {
    const result = playRound("scissors", getCompChoice());
});
rockBtn.addEventListener("click", () => {
    const result = playRound("rock", getCompChoice());
});
paperBtn.addEventListener("click", () => {
    const result = playRound("paper", getCompChoice());
});

