// ui.js
import { Timer } from "./timer.js";
import { playNotification } from "./notifications.js";

const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const resetButton = document.getElementById("reset-btn");
const timer = new Timer();

function updateDisplay() {
  timerDisplay.textContent = timer.getTimeDisplay();
}

function handleStart() {
  timer.startTimer();
}

function handlePause() {
  timer.pauseTimer();
}

function handleReset() {
  timer.resetTimer();
  updateDisplay();
}

startButton.addEventListener("click", handleStart);
pauseButton.addEventListener("click", handlePause);
resetButton.addEventListener("click", handleReset);

export { updateDisplay };
