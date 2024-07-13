const day = document.querySelectorAll(".days");
const hour = document.querySelectorAll(".hours");
const minute = document.querySelectorAll(".minutes");
const second = document.querySelectorAll(".seconds");

// Function for time
function calculateTimeLeft() {
  let futureDate = new Date(2024, 9, 24);

  futureDate = futureDate.getTime();

  const todayDate = new Date().getTime();
  const t = futureDate - todayDate;

  const months = Math.floor(t / (30 * 24 * 60 * 60 * 1000));
  const days = Math.floor(
    (t % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  const hours = Math.floor((t % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((t % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((t % (60 * 1000)) / 1000);

  const values = [months, days, hours, minutes, seconds];

  day.forEach((day) => {
    day.innerHTML = values[1];
  });
  hour.forEach((hour) => {
    hour.innerHTML = values[2];
  });

  minute.forEach((minute) => {
    minute.innerHTML = values[3];
  });
  second.forEach((second) => {
    second.innerHTML = values[4];
  });

  startCountdown();
}

function startCountdown() {
  setInterval(calculateTimeLeft, 1000);
}

calculateTimeLeft();
