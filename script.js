// Author: Adam Peters
// Date: 6/13/24
// Descr: Rock Paper Scissors Game 
// Coded in JS

// Game Variables
let humanScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection;

// Get Input
// Validate Choice
function getHumanChoice() {

    let validInput = false;
    let userInput;

    while(!validInput) {
        userInput = prompt("Enter your Choice: ").toLowerCase();

        if(userInput === "scissors" || userInput === "rock" || userInput === "paper") {
            validInput = true;
        } else {
            prompt("Invalid Input!, Your choice need to be Rock, Paper, or Scissors");
        }
    }

    return userInput;
}

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
        console.log("You win!");
        console.log(humanSelection + " beats " + computerSelection);
    } else {
        computerScore++;
        console.log("You lose!");
        console.log(humanSelection + " is beat by " + computerSelection);
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
        console.log("You Tied");
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
    for(let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        console.log("You chose " + humanSelection);
        console.log("The Computer chose " + computerSelection);

        playRound(humanSelection, computerSelection);

        console.log("Your Score: " + humanScore);
        console.log("Computer's Score: " + computerScore);
    }

    if(humanScore > computerScore) {
        console.log("AI Uprising??? Not with you on team human");
    } else {
        console.log("Uh oh, the AI is coming for you!")
    }
}

playGame();


