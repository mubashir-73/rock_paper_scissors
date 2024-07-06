let h_score = 0;
let c_score = 0;
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
  console.log(`You chose ${humanchoice}`);
  console.log("The computer chose....\n");
  console.log(`${computerchoice}!`);
  switch (computerchoice + "," + humanchoice) {
    case "rock,scissors":
      console.log("You lose! Rock beats Scissors. ");
      c_score += 1;
      break;
    case "scissors,scissors":
      console.log("It's a Draw! Both have chosen scissors!");
      break;
    case "paper,scissors":
      console.log("You win! Scissors beat Paper. ");
      h_score += 1;
      break;
    case "rock,rock":
      console.log("It's a Draw! Both have chosen rock!");
      break;
    case "scissors,rock":
      console.log("You win! Rock beats Scissors. ");
      h_score += 1;
      break;
    case "paper,rock":
      console.log("You lose! Paper beats Rock!. ");
      c_score += 1;
      break;
    case "rock,paper":
      console.log("You win! Paper beats Rock! ");
      h_score += 1;
      break;
    case "scissors,paper":
      console.log("You lose! Scissors beat Paper. ");
      c_score += 1;
      break;
    case "paper,paper":
      console.log("It's a Draw! Both have chosen paper! ");
      break;
    default:
      console.log("Invalid input please try again.");
      break;
  }
  if (h_score > c_score) {
    console.log("You won!");
  } else {
    if (c_score > h_score) {
      console.log("You lost!");
    } else {
      console.log("Nobody won.");
    }
  }
  console.log(`Your score is: ${h_score} and computer score is ${c_score} .`);
}

//for (let i = 0; i < 6; i++) {
//}
