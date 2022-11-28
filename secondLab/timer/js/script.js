// Timer

const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const body = document.querySelector("body");
const btnsMin = document.querySelectorAll(".min button");

let timeInterval, minValue, secValue;

const audio = document.querySelector(`audio[data-key='70']`);

seconds.addEventListener("input", (e) => {
  if (+e.target.value > 60) {
    seconds.value = 60;
  }

  if (+e.target.value < 0) {
    seconds.value = 0;
  }
});

if (localStorage.getItem("minutes")) {
  minValue = +localStorage.getItem("minutes");
  secValue = +localStorage.getItem("seconds");

  if (localStorage.getItem("playing") == "true") {
    minValue = minValue;
    secValue = secValue;

    setClock(minValue, secValue);

    setDisabled(true);
  } else {
    minutes.value = minValue;
    seconds.value = secValue;
  }
}

btnsMin.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    min = +e.target.getAttribute("data-min");
    minutes.value = min;
    seconds.value = 0;
  });
});

btnStart.addEventListener("click", (e) => {
  e.preventDefault();

  minValue = +minutes.value;
  secValue = +seconds.value;

  setClock(minValue, secValue);

  setDisabled(true);
});

btnStop.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(timeInterval);
  localStorage.setItem("playing", false);
});

btnReset.addEventListener("click", (e) => {
  e.preventDefault();

  clearInterval(timeInterval);
  minutes.value = 0;
  seconds.value = 0;
  localStorage.setItem("minutes", 0);
  localStorage.setItem("seconds", 0);

  body.style.backgroundColor = "inherit";
  setDisabled(false);
  audio.pause();
});

function getTimeRemaining(min, sec) {
  let seconds = sec;
  let minutes = min;

  seconds -= 1;

  if (seconds <= 0 && minutes != 0) {
    minutes = minutes - 1;
    seconds = 60;
  }

  if (seconds <= 0) {
    seconds = 0;
  }
  if (minutes <= 0) {
    minutes = 0;
  }

  return {
    minutes: minutes,
    seconds: seconds,
  };
}

function setClock(minValue, secValue) {
  timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(minValue, secValue);

    minValue = t.minutes;
    secValue = t.seconds;

    localStorage.setItem("minutes", minValue);
    localStorage.setItem("seconds", secValue);
    localStorage.setItem("playing", true);

    minutes.value = t.minutes;
    seconds.value = t.seconds;

    if (t.minutes <= 0 && t.seconds <= 0) {
      clearInterval(timeInterval);
      body.style.backgroundColor = "red";
      playSound();
      localStorage.setItem("playing", false);
    }
  }
}

function playSound() {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function setDisabled(arg) {
  if (arg) {
    seconds.setAttribute("disabled", true);
    minutes.setAttribute("disabled", true);
  } else {
    seconds.removeAttribute("disabled");
    minutes.removeAttribute("disabled");
  }
}
