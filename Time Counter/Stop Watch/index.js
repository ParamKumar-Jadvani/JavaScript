let hour = 0;
let minutes = 0;
let second = 0;

const hrs = document.querySelector("#hour");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#seconds");

let Time;

const Start = () => {
  clearInterval(Time);
  Time = setInterval(Stop_Watch, 1000);
};

const Stop = () => {
  clearInterval(Time);
};

const Reset = () => {
  clearInterval(Time);
  hour = 0;
  minutes = 0;
  second = 0;
  if (second < 10) sec.innerHTML = `0${second}`;
  if (minutes < 10) min.innerHTML = `0${minutes} : `;
  if (hour < 10) hrs.innerHTML = `0${hour} : `;
};

const Stop_Watch = () => {
  hrs.innerHTML = `${hour} : `;
  min.innerHTML = `${minutes} : `;
  sec.innerHTML = `${second}`;

  if (second < 10) sec.innerHTML = `0${second}`;
  if (minutes < 10) min.innerHTML = `0${minutes} : `;
  if (hour < 10) hrs.innerHTML = `0${hour} : `;

  if (minutes === 59 && second == 59) {
    hour++;
    minutes = -1;
  }
  if (second == 59) {
    minutes++;
    second = -1;
  }

  second++;
  console.log(hour, minutes, second);
};

const Startbtn = document.querySelector("#Start");
const Stopbtn = document.querySelector("#Stop");
const Resetbtn = document.querySelector("#Reset");

Startbtn.addEventListener("click", Start);
Stopbtn.addEventListener("click", Stop);
Resetbtn.addEventListener("click", Reset);
