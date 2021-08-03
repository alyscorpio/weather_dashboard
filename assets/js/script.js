// Current date from moment js
var today = moment().format("dddd, MMMM Do, YYYY");

// Variables from HTML elements
var forcast = document.querySelector('#weather-forcast');
var currentWeather = document.querySelector('#current-weather');
var fiveDay = document.querySelector("#five-day-forcast");
var searchBtn = document.querySelector('#search-btn');

function displayWeatherNow() {

};

function displayWeatherLater() {

};

searchBtn.addEventListener("click", displayWeatherNow);