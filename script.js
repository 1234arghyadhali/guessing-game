let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attemptBox = document.getElementById("attempts");

  if (isNaN(guess)) {
    feedback.innerText = "Please enter a valid number!";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    feedback.innerHTML = `🎉 Correct! The number was ${secretNumber}.`;
    attemptBox.innerHTML = `You took ${attempts} attempts.`;
  } else if (guess < secretNumber) {
    feedback.innerText = "📉 Too low! Try again.";
  } else {
    feedback.innerText = "📈 Too high! Try again.";
  }
}
