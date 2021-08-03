// Current date from moment js
var today = moment().format("dddd, MMMM Do, YYYY");

// Variables from HTML elements
var forcast = document.querySelector('#weather-forcast');
var currentWeather = document.querySelector('#current-weather');
var fiveDay = document.querySelector("#five-day-forcast");
var searchBtn = document.querySelector('#search-btn');

function displayWeatherNow() {
    // display section
    currentWeather.style.display = 'block';

    // create <div> for "current weather" header
    var currentHeader = document.createElement('div');
    currentHeader.className = "current-header";

    // create <h1> for city name
    var city = document.createElement('h1');
    city.className = "current-city display-6";
    city.textContent = "Example City";

    // create <h4> for date
    var date = document.createElement('h4');
    date.className = "current-date mt-2";
    date.textContent = "today";

    // add elements to header div
    currentHeader.appendChild(city);
    currentHeader.appendChild(date);

    // create <div> for "current weather" info
    var info = document.createElement('div');
    info.className = "current-info mt-4";

    // create <p> for temp
    var temp = document.createElement('p');
    temp.className = "temp";
    temp.textContent = "Temp: " + "XX" + "°F"
    
    // create <p> for wind
    var wind = document.createElement('p');
    wind.className = "wind";
    wind.textContent = "Wind: " + "XX.X" + "MPH"

    // create <p> for humidity
    var humidity = document.createElement('p');
    humidity.className = "humidity";
    humidity.textContent = "Humidity: " + "XX" + "%"

    // create <p> for UV index

    // add elements to "current weather" info <div>

    // add header and info to current weather div

    // run five day forcast
    displayFiveDay();
};

function displayWeatherLater() {
    // display section

    // DAY 1

    // DAY 2

    // DAY 3

    // DAY 4

    // DAY 5

};

searchBtn.addEventListener("click", displayWeatherNow);