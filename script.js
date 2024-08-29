function getComputerChoice(){
    let computerChoice = Math.random();
    console.log(computerChoice);
    if(computerChoice >= 0 && computerChoice <= 0.33 ){
        return "Rock";
    }else if(computerChoice >= 0.34 && computerChoice <= 0.66 ){
        return "Paper";

    } else {
        return "Scissor"
    }
}

function getHumanChoice(){

}

let computerChoice = getComputerChoice();
