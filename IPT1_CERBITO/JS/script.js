 let randomNumber = Math.floor(Math.random() * 50) + 1;
        let attemptCount = 0;

        function resetGame() {
            randomNumber = Math.floor(Math.random() * 50) + 1;
            attemptCount = 0;
            document.getElementById('userGuess').value = '';
            document.getElementById('gameMessage').textContent = '';
            document.getElementById('attemptCount').textContent = '';
            document.getElementById('tryAgainContainer').innerHTML = '';
        }

        function checkGuess() {
            const userGuess = document.getElementById('userGuess').value;
            const message = document.getElementById('gameMessage');
            const attemptMessage = document.getElementById('attemptCount');
            const tryAgainContainer = document.getElementById('tryAgainContainer');

            attemptCount++;
            attemptMessage.textContent = `Try ${attemptCount}:`;

            if (userGuess == randomNumber) {
                message.textContent = "Congratulations! You guessed it!";
                message.style.color = "green";
                tryAgainContainer.innerHTML = `<button class="try-again-button" onclick="resetGame()">Play Again</button>`;
            } else if (userGuess > randomNumber) {
                message.textContent = "Too high! Try again.";
                message.style.color = "red";
            } else if (userGuess < randomNumber) {
                message.textContent = "Too low! Try again.";
                message.style.color = "red";
            } else {
                message.textContent = "Please enter a valid number.";
                message.style.color = "black";
            }
        }