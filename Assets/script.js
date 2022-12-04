let weatherId = "2b30f8c7d1851af94d11392028166c99";
let cities = [];

let prevSearches = document.getElementById('prev-searches');
let searchBtn = document.getElementById('search-btn');
let searchInput = document.getElementById('search-input')



//Save Cities in Local Storage
function saveCities() {
    localStorage.setItem("prevCities", JSON.stringify(cities));
}

function renderCities() {
    for (var i = 0; i < cities.length; i++) {
        let city = cities[i];
        
        var li = $('<li>');
        li.attr("id", "city-list")
        li.text(city[i])

        prevSearches.append(li);
    }
}

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var newcity = $("#search-input").val().trim();

    cities.push(newcity);

    saveCities();
    renderCities();
})

//Load Weather API

