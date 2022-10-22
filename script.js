  //Variable Declarations
    let playerChoice = '';
    let playerScore = 0;
    let computerScore = 0;
    let winner = document.querySelector('.winner');
    let choice = document.querySelector('.choice');
    let display = document.querySelector('.display');
    let score = document.querySelector('.score');
    
// Function to get Computer Choice
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

// Function to get play a single round of rps
function playRound(player, computer){

    if(computer == 'paper' && player == 'rock'){
        computerScore += 1;
        display.textContent = "paper beats rock";
    }
    else if(computer == "paper" && player == "scissors"){
        playerScore += 1;
        display.textContent = "scissors beats paper";
    }
    else if(computer == "paper" && player == 'paper'){
        display.textContent = "Go again?";
    }
    else if(computer == "rock" && player == 'paper'){
        playerScore += 1;
        display.textContent = "paper beats rock";
    }
    else if(computer == "rock" && player == 'scissors'){
        computerScore += 1;
        display.textContent = "rock beats scissors";
    }
    else if(computer == "rock" && player == 'rock'){
        display.textContent = "Go again?";
    }
    else if(computer == "scissors" && player == 'rock'){
        playerScore += 1;
        display.textContent = "rock beats scissors";
    }
    else if(computer == "scissors" && player == 'paper'){
        computerScore += 1;
        display.textContent = "scissors beats paper";
    }
    else{
        display.textContent = "Go again?"
    }

    score.textContent = `computer: ${computerScore} , player: ${playerScore}.`;
    choice.textContent = `Computer chose ${computer}`;
}


// Function for the whole game
function game(){

    playRound(playerChoice, getComputerChoice());

    if(computerScore == 5 || playerScore == 5){
        if(computerScore == 5){
            winner.textContent = `Computer wins with a total of ${computerScore} point(s)!!`;
            computerScore = 0;
            playerScore = 0;
        }
        else{
            winner.textContent = `You won with a total of ${playerScore} point(s)!!`;
            computerScore = 0;
            playerScore = 0;
        } 
    }
    else{
        winner.textContent = 'Nobody\'s won yet.. Play again?'
    }
}

// Event Listener for better interaction
let buttons = Array.from(document.querySelectorAll('.btn'));
buttons.forEach(function(button){

    button.addEventListener('click', function(e){
        playerChoice = (button.textContent).toLowerCase();

        game()
    })    
})