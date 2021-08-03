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
    currentHeader.className = 'current-header';

    // create <h1> for city name
    

    // create <h4> for date

    // add elements to header div

    // create <div> for "current weather" info

    // create <p> for temp
    
    // create <p> for wind

    // create <p> for humidity

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