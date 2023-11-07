console.log("Hello")
//get the computers choice
let choice=["rock", "paper", "scissors"];
let player_score = 0;
let computer_score = 0;
let result="";
let rounds = 5;

const roundResult = document.querySelector(".result")
const pChoiceIcon = document.querySelector(".player")
const cChoiceIcon = document.querySelector(".computer")
const roundCount = document.querySelector('.header')
const picks = document.querySelectorAll('#choice')

function getComputerChoice(){
    rand= Math.floor(Math.random()*choice.length);
    return choice[rand];
}

function getPlayerChoice(){
    picks.forEach(pick => pick.addEventListener('click', ()=>{
        return pick.alt
    }))
}

function setScore(){
    score=document.querySelector("#score_value")
    score.textContent = player_score +":"+ computer_score
}

function setMiniIcon(PlayerI, computerI){
    pChoiceIcon.src = `./images/mini_${PlayerI}.png`
    cChoiceIcon.src =  `./images/mini_${computerI}.png`
}


// checks who won the round
function playRound(){
    //wait for click
    picks.forEach(pick => pick.addEventListener('click', ()=>{

        player = pick.alt
        computer = getComputerChoice()
        console.log(`Y:${player} vs ${computer}:C`)


        setMiniIcon(player, computer)


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

    }))
}

// console.log(playRound(player_c.toLowerCase(), computer_c))
function game(n){
    checkScore = playRound()
    checkScore()
    setScore()

    for (let i=1; i<=n; i++){
        roundCount.textContent="Round "+ i
        result = playRound();
        
        console.log(result)
        if (result == "You win"){
            roundResult.textContent = "Win"
            player_score++;
        }
        else if(result == "Draw"){
            roundResult.textContent = "Draw"
            player_score++;
            computer_score++;
        }
        else{computer_score++; roundResult.textContent = "Lose"}

        
    }   

}

// game(rounds)
// game logic
// load page
// wait for player to choose
// play round one
// set scores
// wait player to choose 
// play another round