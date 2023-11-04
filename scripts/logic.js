console.log("Hello")
//get the computers choice
let choice=["rock", "paper", "scissors"];
let player_score = 0;
let computer_score = 0;
let result="";
let rounds = 5;

function getComputerChoice(choice){
    rand= Math.floor(Math.random()*choice.length);
    return choice[rand];
}
// player_c = "roCk"


// checks who won the round
function playRound(player, computer){
    console.log(`Y:${player} vs ${computer}:C`)
    if (player == computer){
        return "Draw"
    }
    else if(player == "rock" && computer == "scissors"){
        return "You win"
    }
    else if(player == "paper" && computer == "rock"){
        return "You win"
    }
    else if(player == "scissors" && computer == "paper"){
        return "You win"
    }
    else{
        return "You lose"
    }
}

// console.log(playRound(player_c.toLowerCase(), computer_c))
function game(n){
    for (let i=1; i<=n; i++){
        console.log("Round "+ i)
        player= prompt("enter (rock, paper or scissors)")
        result = playRound(player.toLowerCase(), getComputerChoice(choice));
        
        console.log(result)
        if (result == "You win"){
            player_score++;
        }
        else if(result == "Draw"){
            player_score++;
            computer_score++;
        }
        else{computer_score++}
    }
    return `player: ${player_score} __ ${computer_score}:computer`
}

console.log(game(rounds));