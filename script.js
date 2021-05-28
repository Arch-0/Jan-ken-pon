// Rock-paper-scissors game



// When the user clicks on an image start the game



// Computer Logic
function getComputerSelection() {

  let x = Math.floor(Math.random() * 3) + 1

  if(x === 1) {
    
    return "rock"
  } else if (x === 2) {

    return "paper"
  } else if (x === 3) {

    return "scissors"
  }
}

function playRound() { 


  if(playerSelection === "rock" && computerSelection === "rock") {

    return "It's a tie! You played Rock vs Rock"
  
  }
  else if(playerSelection === "rock" && computerSelection === "paper") {

    return "You lose! You played Rock vs Paper"
  }
  else if(playerSelection === "rock" && computerSelection === "scissors") {

    return "You win! You played Rock vs Scissors"
  }


  if(playerSelection === "paper" && computerSelection === "rock") {

    return "You win! You played Paper vs Rock"
  }
  else if(playerSelection === "paper" && computerSelection === "paper") {

    return "It's a tie. You played Paper vs Paper"
  }
  else if(playerSelection === "paper" && computerSelection === "scissors") {

    return "You lose! You played Paper vs Scissors"
  }

  if(playerSelection === "scissors" && computerSelection === "rock") {

    return "You lose! You played Scissors vs Rock"
  }
  else if(playerSelection === "scissors" && computerSelection === "paper") {

    return "You Win! You played Scissors vs Paper"
  }
  else if(playerSelection === "scissors" && computerSelection === "scissors") {

    return "It's a tie. You played Scissors vs Scissors"
  }

