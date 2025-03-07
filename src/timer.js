// timer.js
export class Timer {
  constructor(workDuration = 25, breakDuration = 5) {
    this.workDuration = workDuration * 60;
    this.breakDuration = breakDuration * 60;
    this.currentTime = this.workDuration;
    this.isWorkTime = true;
    this.timerInterval = null;
  }

  startTimer() {
    if (this.timerInterval) return;
    this.timerInterval = setInterval(() => {
      this.currentTime--;
      if (this.currentTime <= 0) {
        this.switchMode();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  resetTimer() {
    this.pauseTimer();
    this.currentTime = this.isWorkTime ? this.workDuration : this.breakDuration;
  }

  switchMode() {
    this.isWorkTime = !this.isWorkTime;
    this.currentTime = this.isWorkTime ? this.workDuration : this.breakDuration;
  }

  getTimeDisplay() {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }
}
