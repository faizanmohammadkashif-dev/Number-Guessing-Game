let playerOne = document.querySelector('#playerOne');
let playerTwo = document.querySelector('#playerTwo');
let inputOne = document.querySelector('#inputOne');
let inputTwo = document.querySelector('#inputTwo');

let secretNumber;
let guessNumber;
let chances = 5;

function playerOneNumber() {
    secretNumber = inputOne.value;
    playerOne.style.display = 'none';
    playerTwo.style.display = 'block';
    inputOne.value = '';
}

function playerTwoNumber() {
    guessNumber = inputTwo.value;

    if (secretNumber == guessNumber) {
        result.innerHTML = "Congratulations!You guessed the number!! Player Two wins!!";
    }
    else {
        if (chances > 0) {
            chances--;
            result.innerHTML = `Wrong guess! You have ${chances} chances left!!`;
        }
        else {
            result.innerHTML = 'You lost the game!!! Player One wins!!';
        }
    }

    inputTwo.value = '';
}