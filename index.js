const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

// Converting second,minute,hour,day in milliseconds
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  // Generating current Date in mm/dd/yyyy
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();
  now = `${mm}/${dd}/${yyyy}`;

  // Taking Target Date from user
  const enteredDay = prompt("Enter Day").padStart(2, "0");
  if (enteredDay > 0 && enteredDay <= 31) {
    const enteredMonth = prompt("Enter Month").padStart(2, "0");
    if (enteredMonth > 0 && enteredMonth <= 12) {
      let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

      // Checking if Target Date is for next year
      if (now > targetDate)
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;

      const intervalId = setInterval(() => {
        // Converting Target Date in Milliseconds
        const timer = new Date(targetDate).getTime();
        // Taking Current Date in Milliseconds
        const today = new Date().getTime();

        // Finding Difference between Target Date and Current Date
        const difference = timer - today;

        // Finding left days,hours,minutes,seconds
        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);

        // Showing Timer in DOM
        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSecond;

        // Stop setInterval after reaching the target time
        if (difference < 0) {
          counterTimer.style.display = "none";
          heading.innerText = "Time's Up";
          clearInterval(intervalId);
        }
      }, 0);
    } else {
      counterTimer.style.display = "none";
      heading.innerText = "Oops! Something went wrong";
      alert("Invalid Month!");
    }
  } else {
    counterTimer.style.display = "none";
    heading.innerText = "Oops! Something went wrong";
    alert("Invalid Day!");
  }
};

timerFunction();
