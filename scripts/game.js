console.log("start")
roundResult = document.querySelector(".result")
const pChoiceIcon = document.querySelector(".player")
const cChoiceIcon = document.querySelector(".computer")
const roundCount = document.querySelector('.header')
const playerChoices = document.querySelectorAll('#choice')
const score = document.querySelector("#score_value")

let c_choices=["rock", "paper", "scissors"];
let computerChoice = ""
let rResult
let round = 1
let P_score =0
let C_score =0
let setGame= false

function setDefault(){
    score.textContent = "0:0"
    rResult = ""
    roundCount.textContent= "Choose one to play the game"
    setGame= true
}
function getComputerChoice(choice){
    rand= Math.floor(Math.random()*choice.length);
    return choice[rand];
}
function setMiniIcon(PlayerI, computerI){
    pChoiceIcon.src = `./images/mini_${PlayerI}.png`
    cChoiceIcon.src =  `./images/mini_${computerI}.png`
}

function getRoundResult(player, computer){
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
function setRoundresult(result){
    if (result == "You win"){
        roundResult.textContent ="Win"
        P_score ++;
    }
    else if(result == "Draw"){
        roundResult.textContent = "Draw"
        P_score++;
        C_score++;
    }
    else{C_score++; roundResult.textContent = "Lose"}
    return (P_score+":"+C_score)
}
function playRound(rounds){
    // round only plays when player clicks an option
    playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', ()=>{
        // whole round logic should go in here
        //set round choices
        computerChoice = getComputerChoice(c_choices)
        setMiniIcon(playerChoice.alt, computerChoice)

        //compare round choices
        rResult = getRoundResult(playerChoice.alt, computerChoice)
        score.textContent = setRoundresult(rResult)
        round++
            
    }))
}

function game(){
    // initilize defaults
    playRound(5)

}
setDefault()
game()