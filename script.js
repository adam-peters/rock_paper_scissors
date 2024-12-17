// Author: Adam Peters
// Date: 6/13/24
// Descr: Rock Paper Scissors Game 
// Coded in JS

// Game Variables
let humanScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection;

// Container for User Selected Buttons for Rock, Paper or Scissors
const userInput = document.querySelector("#input");

// Container for Displaying Game Results
const results = document.querySelector("#results");
const resultsText = document.createElement("p");
const scores = document.querySelector("#scores");
const scoresText = document.createElement("p");

userInput.addEventListener("click", function(e){
    humanSelection = e.target.id;
    resultsText.textContent = "";
    playGame();
});

// Generate Computer Response
// Needs Random Number between One and Three
// Assign Different Choice based on Number
function getComputerChoice() {
    let response = "";

    num = parseInt(Math.random() * 3 + 1);

    switch(num) {
        case 1:
            response="rock";
            break;
        case 2:
            response="scissors";
            break;
        case 3:
            response="paper";
            break;
    }

    return response;
}

// Helper function to manage win state to eliminate excess code in playRound()
function processRound(winner) {
    if(winner) {
        humanScore++;
        resultsText.textContent += " You win! " + humanSelection + " beats " + computerSelection + ".";
    } else {
        computerScore++;
        resultsText.textContent += " You lose! " + humanSelection + " is beat by " + computerSelection + ".";
    }  
}

// Compare Results
// Same Choice is Tie
// Rock wins against Scissors
// Scissors against Paper
// Paper against Rock
function playRound(humanChoice, computerChoice) {

    let didUserWin = false;

    // Check Tie First
    if(humanChoice === computerChoice) {
        resultsText.textContent += " You tied";
    } else {

        // Check Who Wins 
        if(humanChoice === "rock") {
            if(computerChoice != "paper") {didUserWin = true;}
        } else if (humanChoice === "paper") {
            if(computerChoice != "scissors") {didUserWin = true;}
        } else if (humanChoice === "scissors") {
            if(computerChoice != "rock") {didUserWin = true;}
        }

        processRound(didUserWin);
    }  

    
}

function playGame() {
    computerSelection = getComputerChoice();

    resultsText.textContent = "You chose " + humanSelection + ". The Computer chose " + computerSelection + ".";
    results.appendChild(resultsText);

    playRound(humanSelection, computerSelection);

    scoresText.textContent = "Your Score: " + humanScore + " \t Computer's Score: " + computerScore;

    scores.appendChild(scoresText);
}






