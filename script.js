let h_score = 0;
let c_score = 0;
let roundNumber = 0;
console.log("Checking Proper linking of javascript...");
function getComputerChoice() {
  let c = Math.floor(Math.random() * 10);
  let c_choice;
  if (c <= 3) {
    c_choice = "rock";
  }
  if (c > 3 && c <= 6) {
    c_choice = "paper";
  }
  if (c > 6) {
    c_choice = "scissors";
  }
  return c_choice;
}

const btn = document.querySelector("#buttons");
btn.addEventListener("click", (event) => {
  let targetButton = event.target;
  switch (targetButton.id) {
    case "paper":
      playRound(getComputerChoice(), "paper");
      break;
    case "rock":
      playRound(getComputerChoice(), "rock");
      break;
    case "scissors":
      playRound(getComputerChoice(), "scissors");
      break;
  }
});

function playRound(computerchoice, humanchoice) {
  roundNumber += 1;
  alert(`You chose ${humanchoice}, the computer chose....${computerchoice}!\n`);
  switch (computerchoice + "," + humanchoice) {
    case "rock,scissors":
      alert("You lose! Rock beats Scissors. ");
      c_score += 1;
      break;
    case "scissors,scissors":
      alert("It's a Draw! Both have chosen scissors!");
      break;
    case "paper,scissors":
      alert("You win! Scissors beat Paper. ");
      h_score += 1;
      break;
    case "rock,rock":
      alert("It's a Draw! Both have chosen rock!");
      break;
    case "scissors,rock":
      alert("You win! Rock beats Scissors. ");
      h_score += 1;
      break;
    case "paper,rock":
      alert("You lose! Paper beats Rock!. ");
      c_score += 1;
      break;
    case "rock,paper":
      alert("You win! Paper beats Rock! ");
      h_score += 1;
      break;
    case "scissors,paper":
      alert("You lose! Scissors beat Paper. ");
      c_score += 1;
      break;
    case "paper,paper":
      alert("It's a Draw! Both have chosen paper! ");
      break;
    default:
      alert("Invalid input please try again.");
      break;
  }
  if (roundNumber > 5) {
    finalScore(h_score, c_score);
  }
}

function finalScore(h_score, c_score) {
  if (h_score > c_score) {
    alert("You won!");
  } else {
    if (c_score > h_score) {
      alert("You lost!");
    } else {
      alert("Nobody won.");
    }
  }
  alert(`Your score is: ${h_score} and computer score is ${c_score} .`);
}

//for (let i = 0; i < 6; i++) {
//}
