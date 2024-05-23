const Timer = () => {
  let hour = 12;
  let minutes = 0;
  let seconds = 0;

  const Time = setInterval(() => {
    console.log(hour, minutes, seconds);

    document.getElementById('hour').innerHTML = `${hour} : `
    document.getElementById('minutes').innerHTML = `${minutes} : `
    document.getElementById('seconds').innerHTML = `${seconds} `

    if (hour == 0 && minutes == 0 && seconds == 0) {
      clearInterval(Time);
    }

    if (minutes == 0 && seconds == 0) {
      hour--;
      minutes = 60;
    }

    if (seconds == 0) {
      minutes--;
      seconds = 60;
    }

    seconds--;
  }, 1000);
};

Timer();
