//time
let date = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[date.getDay()];
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDay = document.querySelector("#todays-day");
currentDay.innerHTML = `${day}`;

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${hour}:${minutes}`;

//
function showWeatherInfo(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function search(city) {
  let apiKey = "d97c0a348f5d52e2d0c7313a7a026be8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInfo);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").value;
  search(city);
}
function updateMilan(event) {
  event.preventDefault();
  let city = "Milan";
  let apiKey = "d97c0a348f5d52e2d0c7313a7a026be8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInfo);
}
function updateIstanbul(event) {
  event.preventDefault();
  let city = "Istanbul";
  let apiKey = "d97c0a348f5d52e2d0c7313a7a026be8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInfo);
}
function updateNewYork(event) {
  event.preventDefault();
  let city = "New York";
  let apiKey = "d97c0a348f5d52e2d0c7313a7a026be8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInfo);
}
function updateLondon(event) {
  event.preventDefault();
  let city = "London";
  let apiKey = "d97c0a348f5d52e2d0c7313a7a026be8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInfo);
}

let submit = document.querySelector("#search-form");
submit.addEventListener("submit", handleSubmit);

let milanLink = document.querySelector("#milan-city");
milanLink.addEventListener("click", updateMilan);

let istanbulLink = document.querySelector("#istanbul-city");
istanbulLink.addEventListener("click", updateIstanbul);

let newyorkLink = document.querySelector("#newyork-city");
newyorkLink.addEventListener("click", updateNewYork);

let londonLink = document.querySelector("#london-city");
londonLink.addEventListener("click", updateLondon);

search("Bologna");
