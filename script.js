let timer;
let running = false;
let hours = 0, minutes = 0, seconds = 0;
let lapCount = 1;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  running = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  lapCount = 1;
  updateDisplay();
  document.getElementById("laps").innerHTML = "<h3>Lap Times</h3>";
}

function lap() {
  if (running) {
    let lapTime = document.getElementById("display").innerText;
    let lapDiv = document.createElement("div");
    lapDiv.classList.add("lap-item");
    lapDiv.innerHTML = `<span>Lap ${lapCount++}</span> <span>${lapTime}</span>`;
    document.getElementById("laps").appendChild(lapDiv);
  }
}
