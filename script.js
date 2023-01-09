// Handle inputs
const interval = document.querySelector(".control_interval");
const limit = document.querySelector(".control_limit");
const displayCounter = document.querySelector(".display_text");
const intervalInterval = document.querySelector(".control_intervalInterval");
const limitInterval = document.querySelector(".control_limitInterval");
let displayTimeInterval = document.querySelector(".display_textInterval");
let count = true;
let counterInterval = 1;
let intervalId;

// Set timeout

// Display counter
let displayNumber = (counter, limit) => {
  if (counter <= limit && count) {
    console.log("counter ", counter);
    displayCounter.textContent = counter;
    return true;
  } else {
    return false;
  }
};

// Start
function start() {
  startTimer(displayNumber, interval.value, limit.value);
}

// Start timer
function startTimer(displayNumber, interval, limit) {
  let timerData = {
    counter: 1,
    limit: limit,
    interval: interval,
    displayNumber: displayNumber,
    setInterval: function (x) {
      if (x.displayNumber(x.counter++, x.limit)) {
        setTimeout(x.setInterval, x.interval, x);
      }
    },
  };
  setTimeout(timerData.setInterval, timerData.interval, timerData);
}

// Stop timer
function stop() {
  count = false;
}

// Reset
function reset() {
  count = true;
  interval.value = 1000;
  limit.value = 5;
  displayCounter.textContent = 0;
}

// Set interval

// Display counter
let displayIntervalNumber = () => {
  console.log("counter ", counterInterval);
  displayTimeInterval.textContent = counterInterval;
  if (limitInterval.value && counterInterval >= limitInterval.value) {
    stopInterval();
  } else {
    counterInterval++;
  }
};

// Start interval
function startInterval() {
  console.log("StartTimerInterval");
  startTimerInterval(
    displayIntervalNumber,
    intervalInterval.value,
    limitInterval.value
  );
}

// Start timer
function startTimerInterval(displayNumber, interval, limit) {
  console.log("I'm here");
  console.log("Interval ", interval);
  intervalId = setInterval(displayNumber, interval);
  console.log("intervalId ", intervalId);
}

// Stop interval
function stopInterval() {
  clearInterval(intervalId);
  counterInterval = 1;
}

// Reset interval
function resetInterval() {
  intervalInterval.value = 1000;
  counterInterval = 1;
  displayTimeInterval.textContent = 0;
  if (intervalId) {
    clearInterval(intervalId);
  }
}
