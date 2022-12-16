const searchBar = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn')
const currentCity = $('#CityName');
const date = $('#date');
const currentTemp = $('#currentTemp');
const currentWind = $('#currentWind');
const currentHumidity = $('#currentHumidity');

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
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${apiKey}&units=imperial`;
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

function saveSearch() {
    localStorage.setItem("recent-searches", JSON.stringify(cities))
}

searchBtn.addEventListener('click', function(event) {
  event.preventDefault();

  let newsearch = searchBar.value;
  cities.push(newsearch);
  console.log(searchBar.value);
  
 todayWeather();
})




