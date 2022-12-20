const searchBar = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn')
const currentCity = document.getElementById('CityName');
const date = $('#date');

const currentTemp = document.getElementById('currentTemp');
const currentWind = document.getElementById('currentWind');
const currentHumidity = document.getElementById('currentHumidity');

const temp1 = document.getElementById('Temp1');
const temp2 = document.getElementById('Temp2');
const temp3 = document.getElementById('Temp3');
const temp4 = document.getElementById('Temp4');
const temp5 = document.getElementById('Temp5');

const wind1 = document.getElementById('Wind1');
const wind2 = document.getElementById('Wind2');
const wind3 = document.getElementById('Wind3');
const wind4 = document.getElementById('Wind4');
const wind5 = document.getElementById('Wind5');

const humidity1 = document.getElementById('Humidity1');
const humidity2 = document.getElementById('Humidity2');
const humidity3 = document.getElementById('Humidity3');
const humidity4 = document.getElementById('Humidity4');
const humidity5 = document.getElementById('Humidity5');

const apiKey = '2b30f8c7d1851af94d11392028166c99';
const cities = [];
let city = searchBar.value;

//Renders Current and Upcoming Dates
date.text(dayjs().format('MM/DD/YYYY'));
let day1 = dayjs().add(1, 'day').format('MM/DD/YYYY');
let day2 = dayjs().add(2, 'day').format('MM/DD/YYYY');
let day3 = dayjs().add(3, 'day').format('MM/DD/YYYY');
let day4 = dayjs().add(4, 'day').format('MM/DD/YYYY');
let day5 = dayjs().add(5, 'day').format('MM/DD/YYYY');

$('#Day1').text(day1);
$('#Day2').text(day2);
$('#Day3').text(day3);
$('#Day4').text(day4);
$('#Day5').text(day5);


//Display Today's Weather
function todayWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${apiKey}&units=imperial`)
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
    
    currentCity.textContent = searchBar.value
    currentTemp.textContent = data.main.temp + " °F";
    currentWind.textContent = data.wind.speed + " MPH";
    currentHumidity.textContent = data.main.humidity + " %";
  });
}


//Display Upcoming Forecast for the Next 5 Days
function upcomingForecast() {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchBar.value}&appid=${apiKey}&units=imperial`)
    .then(function (response) {
      return response.json()
    })

    .then(function(data) {

      temp1.textContent = data.list[0].main.temp + " °F";
      temp2.textContent = data.list[1].main.temp + " °F";
      temp3.textContent = data.list[2].main.temp + " °F";
      temp4.textContent = data.list[3].main.temp + " °F";
      temp5.textContent = data.list[4].main.temp + " °F";

      wind1.textContent = data.list[0].wind.speed + " MPH";
      wind2.textContent = data.list[1].wind.speed + " MPH";
      wind3.textContent = data.list[2].wind.speed + " MPH";
      wind4.textContent = data.list[3].wind.speed + " MPH";
      wind5.textContent = data.list[4].wind.speed + " MPH";

      humidity1.textContent = data.list[0].main.humidity + " %";
      humidity2.textContent = data.list[1].main.humidity + " %";
      humidity3.textContent = data.list[2].main.humidity + " %";
      humidity4.textContent = data.list[3].main.humidity + " %";
      humidity5.textContent = data.list[4].main.humidity + " %";

  })
};


function saveSearch() {
    localStorage.setItem("prev-searches", JSON.stringify(cities))
}

searchBtn.addEventListener('click', function(event) {
  event.preventDefault();

  
  let newsearch = searchBar.value;
  cities.push(newsearch);
  
  saveSearch(); 
  displaySearches();
  todayWeather();
  upcomingForecast();

  console.log(cities)
})

function displaySearches() {
  let searchHistory = document.getElementById('prev-searches');
  let search = searchBar.value
  let li = document.createElement('li');
  let button = document.createElement('button');
  let link = document.createTextNode(search);
  
  button.appendChild(link);

  li.appendChild(button);

  searchHistory.appendChild(li);
}








