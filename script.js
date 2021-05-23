// Rock-paper-scissors game

function computerSelection() {

  //* Here I'm just creating a random number between 0 and 1, multiplying it by 3 and adding 1 to it
  let x = Math.floor(Math.random() * 3) + 1

  if(x === 1) {
    
    return "rock"
  } else if (x === 2) {

    return "paper"
  } else if (x === 3) {

    return "scissors"
  } else {
    console.log("Something wrong occurred, I'm so sorry!")
  }
}

//! Player Selection
// function playerSelection() {

//   let playerInput= prompt("Rock, paper or scissors?")
//   let lowerPlayerInput = playerInput.toLowerCase()

//   if(lowerPlayerInput === "rock") {

//     return "rock"
//   } else if (lowerPlayerInput === "paper") {

//     return "paper"
//   } else if (lowerPlayerInput === "scissors") {

//     return "scissors"
//   } else {

//     // console.log("Your input is invalid!")
//     // Creates an alert telling the user their input is incorrect.
//     alert("Your input was invalid!")
    
//   }
//}
 // Testing if the player selection is working as intended
//console.log(playerSelection())

let userScore = 0
let computerScore = 0

while(userScore !== 5 || computerScore !== 5) {
  
  
  function playRound() { 


    let x = playerPlay.toLowerCase()
    let y = computerSelection()

    if(x === "rock" && y === "rock") {

      return "It's a tie! You played Rock vs Rock"
    
    }
    else if(x === "rock" && y === "paper") {

      computerScore += 1
      return "You lose! You played Rock vs Paper"
    }
    else if(x === "rock" && y === "scissors") {

      userScore += 1
      return "You win! You played Rock vs Scissors"
    }


    if(x === "paper" && y === "rock") {

      userScore += 1
      return "You win! You played Paper vs Rock"
    }
    else if(x === "paper" && y === "paper") {

      return "It's a tie. You played Paper vs Paper"
    }
    else if(x === "paper" && y === "scissors") {

      computerScore +=1
      return "You lose! You played Paper vs Scissors"
    }

    if(x === "scissors" && y === "rock") {

      computerScore += 1
      return "You lose! You played Scissors vs Rock"
    }
    else if(x === "scissors" && y === "paper") {

      userScore += 1
      return "You Win! You played Scissors vs Paper"
    }
    else if(x === "scissors" && y === "scissors") {

      return "It's a tie. You played Scissors vs Scissors"
    }
    else {

      alert("I'm sorry, something terribly wrong happened.")
    }

  }

  const playerPlay = prompt("Rock, Paper or Scissors?")

  console.log(playRound(playerPlay))

  if (userScore === 5) {
    
    alert("You won the game! Congratulations!")
    break

  } else if(computerScore === 5) {

    alert("The computer won! Reload to try again :)")
    break
  }

}