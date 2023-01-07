// Handle inputs
const interval = document.querySelector(".control_interval");
const limit = document.querySelector(".control_limit");
const displayCounter = document.querySelector(".display_text");

// Listen event
//document.addEventListener("click", start);

// Display counter
let displayNumber = (counter, limit) => {
  if (counter <= limit) {
    console.log(counter);
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
  // let interval = document.querySelector(".control_interval").value;
  // let limit = document.querySelector(".control_limit").value;
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
