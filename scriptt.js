

var userWins = 0;
var computerWins = 0;

function updateScores() {
    document.getElementById('userScore').textContent = userWins;
    document.getElementById('computerScore').textContent = computerWins;
}

function chooseOption(userChoice) {
    var userImage = document.getElementById('userImage');
    userImage.src = userChoice + '.png';

    var options = ['rock', 'paper', 'scissor'];
    var computerChoice = options[Math.floor(Math.random() * options.length)];

    var computerImage = document.getElementById('computerImage');
    computerImage.src = computerChoice + '.png';

    var resultDisplay = document.getElementById('result');
    if (userChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
    document.getElementById('result').style.color = 'yellow';
    } else if ((userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'scissor' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')) {
        resultDisplay.textContent = "You win!";
        document.getElementById('result').style.color = 'green';
        userWins++;
    } else {
        resultDisplay.textContent = "Computer wins!";
        document.getElementById('result').style.color = 'red';
        computerWins++;
    }

    updateScores();
}
