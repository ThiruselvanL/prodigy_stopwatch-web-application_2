let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

function updateDisplay() {
  minutesDisplay.textContent = minutes.toString().padStart(2, "0");
  secondsDisplay.textContent = seconds.toString().padStart(2, "0");
  millisecondsDisplay.textContent = milliseconds.toString().padStart(2, "0");
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      updateDisplay();
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
