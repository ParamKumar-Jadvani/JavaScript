const dataInput = (event) => {
  event.preventDefault();
  const city = document.getElementById("city-input").value;
  API(city);
};

const API = async (city) => {
  let request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbec3de2e0ae4b24f2653e65ce78b9f2&units=metric`
  );

  let response = await request.json();
  UI_Data(response);
};

const UI_Data = (data) => {
  console.log(data);

  document.getElementById("weather-city").innerText = data.name;

  document.getElementById(
    "weather-icon"
  ).innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">`;

  document.getElementById("weather-datetime").innerText = new Date(
    data.dt * 1000
  ).toLocaleString();

  document.getElementById("weather-temp").innerText = `${data.main.temp}°C`;

  document.getElementById(
    "weather-min"
  ).innerText = `Min: ${data.main.temp_min}°C`;

  document.getElementById(
    "weather-max"
  ).innerText = `Max: ${data.main.temp_max}°C`;

  document.getElementById(
    "weather-realfeel"
  ).innerText = `${data.main.feels_like}°C`;

  document.getElementById(
    "weather-humidity"
  ).innerText = `${data.main.humidity}%`;

  document.getElementById("weather-wind").innerText = `${data.wind.speed} m/s`;

  document.getElementById(
    "weather-pressure"
  ).innerText = `${data.main.pressure} hPa`;
};

document.getElementById("weather-form").addEventListener("submit", dataInput);
document.querySelector(".weather__submit").addEventListener("click", dataInput);
