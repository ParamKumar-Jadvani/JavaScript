function Digital_Clock() {
  let dayType = "PM";

  let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December",
  ];
  let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  setInterval(() => {
    let Time = new Date();
    let day = Time.getDay(),
      month = Time.getMonth(),
      date = Time.getDate(),
      year = Time.getFullYear(),
      hour = Time.getHours(),
      minute = Time.getMinutes(),
      seconds = Time.getSeconds();

    let formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12") hour = hour % 12;

    console.log(hour);
    console.log(formatValue);

    if (dayType == "PM" && hour == 12 && minute == 0 && seconds == 0)
      dayType = "AM";
    else if (dayType == "AM" && hour == 12 && minute == 0 && seconds == 0)
      dayType = "PM";

    document.getElementById("dayName").innerHTML = `${weeks[day]} , `;
    document.getElementById("month").innerHTML = `${monthName[month]} `;
    document.getElementById("date").innerHTML = date;
    document.getElementById("year").innerHTML = year;

    document.getElementById("hour").innerHTML = `${hour} :`;
    document.getElementById("minutes").innerHTML = `${minute} :`;
    document.getElementById("seconds").innerHTML = `${seconds}`;
    document.getElementById("dayType").innerHTML = dayType;
  }, 1000);
}

const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") formatSwitchBtn.setAttribute("data-format", "24");
  else formatSwitchBtn.setAttribute("data-format", "12");
});

Digital_Clock();
