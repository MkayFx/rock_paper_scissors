let playerScore = 0;
let computerScore = 0;
let comment = '';
let winner = '';

function getComputerChoice(){
    let result = '';
    if(Math.random() <= 0.33){
        result = "Paper";
    }
    else if(0.33 < Math.random() <= 0.66){
        result = 'Scissors';
    }
    else{
        result = "Rock";
    }

    return result.toLowerCase();
}

function getPlayerChoice(){
    result = prompt('Make your choice', ).toLowerCase();
    return result;
}


function playRound(player, computer){

    if(computer == 'paper' && player == 'rock'){
        computerScore += 1;
        comment = "paper beats rock";
    }
    else if(computer == "paper" && player == "scissors"){
        playerScore += 1;
        comment = "scissors beats paper";
    }
    else if(computer == "paper" && player == 'paper'){
        comment = "Go again?";
    }
    else if(computer == "rock" && player == 'paper'){
        playerScore += 1;
        comment = "paper beats rock";
    }
    else if(computer == "rock" && player == 'scissors'){
        computerScore += 1;
        comment = "rock beats scissors";
    }
    else if(computer == "rock" && player == 'rock'){
        comment = "Go again?";
    }
    else if(computer == "scissors" && player == 'rock'){
        playerScore += 1;
        comment = "rock beats scissors";
    }
    else if(computer == "scissors" && player == 'paper'){
        computerScore += 1;
        comment = "scissors beats paper";
    }
    else if(computer == "scissors" && player == 'scissors'){
        comment = "Go again?"
    }
    else{
        comment = 'Not a valid input';
    }

    console.log(`Computer: ${computer} - Player: ${player}`);
    console.log({computerScore, playerScore, comment});
}

function game(){
    let rounds = Number(prompt('How many rounds?', '5?'));

    for(let i = 0; i < rounds; i++){
        playRound(getPlayerChoice(), getComputerChoice())
    }

    if(computerScore > playerScore){
        winner = `Computer wins with a total of ${computerScore} point(s)!!`;
    }
    else if(computerScore == playerScore){
        winner = 'Nobody won.. Play again?'
    }
    else{
        winner = `You won with a total of ${playerScore} point(s)!!`
    }

    console.log(winner);
}

game();