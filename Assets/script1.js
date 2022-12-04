const searchInput = $('#search-input');
const currentCity = $('#CityName');
const date = $('#date');


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