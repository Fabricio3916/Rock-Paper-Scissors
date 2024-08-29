function getComputerChoice(){
    let computerChoice = Math.random();
    if(computerChoice >= 0 && computerChoice <= 0.33 ){
        return "Rock";
    }else if(computerChoice >= 0.34 && computerChoice <= 0.66 ){
        return "Paper";
    } else {
        return "Scissor"
    }
}

function getHumanChoice(){
    let playerChoice = prompt("Rock, Paper, Scissors!");
    return playerChoice;
}

function playRound(playerChoice,computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if( playerChoice == "rock" && computerChoice == "rock"){
        return "Draw between Rocks!";
    } 
    else if(playerChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        return "You lose, Paper beats Rock!";
    } 
    else if(playerChoice == "rock" && computerChoice == "scissor"){
        playerScore++;
        return "You win, Rock beats Scissors!";
    }

    else if( playerChoice == "paper" && computerChoice == "rock"){
        playerScore++;
        return "You win, Paper beats Rock!";
    }
    else if(playerChoice == "paper" && computerChoice == "paper"){
        return "Draw between Paper!";
    }
    else if(playerChoice == "paper" && computerChoice == "scissor"){
        computerScore++;
        return "You lose, Scissors beats Paper";
    }
    
    else if( playerChoice == "scissor" && computerChoice == "rock"){
        computerScore++;
        return "You lose, Rock beats Scissor!";
    }
    else if(playerChoice == "scissor" && computerChoice == "paper"){
        playerScore++;
        return "You win, Scissor beats Paper!";
    }
    else if(playerChoice == "scissor" && computerChoice == "scissor"){
        return "Draw between Scissors!";
    }
}

function playGame(){
    while(round < 5){
        let computerChoice = getComputerChoice();
        let playerChoice = getHumanChoice();
        let gameResult = playRound(playerChoice, computerChoice);
        round++
        console.log(gameResult);
        console.log("The computer score is " + computerScore);
        console.log("The player score is: " + playerScore);
        console.log("------");
    }
}

let round = 0;
let computerScore = 0;
let playerScore = 0;
playGame();

