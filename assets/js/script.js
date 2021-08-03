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
    dateTwo.textContent = moment().add(2, "d").format("ddd M/DD");
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
    // new date
    var dateThree = document.querySelector(".b3-date");
    dateThree.textContent = moment().add(3, "d").format("ddd M/DD");
    // temp
    var tempThree = document.querySelector(".b3-temp");
    tempThree.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var windThree = document.querySelector(".b3-wind");
    windThree.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var humidityThree = document.querySelector(".b3-humid");
    humidityThree.textcontent = "Humidity:  " + "XX" + "%";

    // DAY 4
    // new date
    var dateFour = document.querySelector(".b4-date");
    dateFour.textContent = moment().add(4, "d").format("ddd M/DD");
    // temp
    var tempFour = document.querySelector(".b4-temp");
    tempFour.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var windFour = document.querySelector(".b4-wind");
    windFour.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var humidityFour = document.querySelector(".b4-humid");
    humidityFour.textcontent = "Humidity:  " + "XX" + "%";

    // DAY 5
    // new date
    var dateFive = document.querySelector(".b5-date");
    dateFive.textContent = moment().add(5, "d").format("ddd M/DD");
    // temp
    var tempFive = document.querySelector(".b5-temp");
    tempFive.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var windFive = document.querySelector(".b5-wind");
    windFive.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var humidityFive = document.querySelector(".b5-humid");
    humidityFive.textcontent = "Humidity:  " + "XX" + "%";
};

searchBtn.addEventListener("click", displayWeatherNow);