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
    var currentInfo = document.createElement('div');
    currentInfo.className = "current-info mt-4";

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
    var uv = document.createElement('p');
    uv.className = "uv";
    uv.textContent = "UV Index: " + "XX.X";

    // add elements to "current weather" info <div>
    currentInfo.appendChild(temp);
    currentInfo.appendChild(wind);
    currentInfo.appendChild(humidity);
    currentInfo.appendChild(uv);

    // add header and info to current weather div
    currentWeather.appendChild(currentHeader);
    currentWeather.appendChild(currentInfo);

    // run five day forcast
    displayFiveDay();
};

function displayWeatherLater() {
    // display section
    fiveDay.style.display = "block";

    // DAY 1
    // new date
    var dateOne = document.querySelector(".b1-date");
    dateOne.textContent = moment().add(1, "d").format("ddd M/DD");
    // temp
    var tempOne = document.querySelector(".b1-temp");
    tempOne.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var windOne = document.querySelector(".b1-wind");
    windOne.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var humidityOne = document.querySelector(".b1-humid");
    humidityOne.textcontent = "Humidity:  " + "XX" + "%";

    // DAY 2
    // new date
    var dateTwo = document.querySelector(".b2-date");
    dateTwo.textContent = moment().add(1, "d").format("ddd M/DD");
    // temp
    var tempTwo = document.querySelector(".b2-temp");
    tempTwo.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var windTwo = document.querySelector(".b2-wind");
    windTwo.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var humidityTwo = document.querySelector(".b2-humid");
    humidityTwo.textcontent = "Humidity:  " + "XX" + "%";

    // DAY 3

    // DAY 4

    // DAY 5

};

searchBtn.addEventListener("click", displayWeatherNow);