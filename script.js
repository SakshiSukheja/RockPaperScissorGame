//function chooseOption(userChoice) {
//    const options = ['rock', 'paper', 'scissors'];
//    const computerChoice = options[Math.floor(Math.random() * options.length)];
//
//    displayChoices(userChoice, computerChoice);
//}
//
//function displayChoices(userChoice, computerChoice) {
//    const userChoiceElement = document.getElementById('userChoice');
//    const computerChoiceElement = document.getElementById('computerChoice');
//
//    userChoiceElement.style.backgroundImage = `url(${userChoice}.png)`;
//    computerChoiceElement.style.backgroundImage = `url(${computerChoice}.png)`;
//}
//


function chooseOption(userChoice) {
    const userImage = document.getElementById('userImage');
    userImage.src = `${userChoice}.png`;

    const options = ['rock', 'paper', 'scissor'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    const computerImage = document.getElementById('computerImage');
    computerImage.src = `${computerChoice}.png`;

    if (userChoice == computerChoice) {
        alert("It's a tie!");
    } else if ((userChoice == "rock" && computerChoice == "scissor") ||
        (user.choice == "scissor" && computerChoice == "paper") ||
        (userChoice = "paper" && computerChoice == "rock")) {
        alert("You win!")
    }
    else {
        alert("Computer wins!");
    }
}



