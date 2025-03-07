import "./styles.css";
import { updateDisplay } from "./ui.js";
import { Timer } from "./timer.js";

const timer = new Timer();

function refreshTimerDisplay() {
  updateDisplay();
}

setInterval(refreshTimerDisplay, 1000); //every second
