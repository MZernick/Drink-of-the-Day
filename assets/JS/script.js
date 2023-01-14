var ingredientSearchBtn = document.querySelector("#ingredient-search-button");
var citySearchBtn = document.querySelector("#search-button");
var hidePageIntro = document.querySelector("#weather-hide-intro");
var hideDrinkIntro = document.querySelector("#ingredient-text");
var cardSection = document.querySelector("#card-section");
var weatherCard = document.querySelector("#weather-container");
var userInput = document.querySelector("#search-input");

var displayTemp = document.querySelector("#current-temperature");
var displayIcon = document.querySelector("#tempicon");
var displayHumidity = document.querySelector("#current-humidity");
var displayWind = document.querySelector("#current-wind-speed");
var displayFeelsLike = document.querySelector("#current-feelslike");

cardSection.style.display = "none";
weatherCard.style.display = "none";

// fetch weather API
citySearchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  cardSection.style.display = "block";
  weatherCard.style.display = "block";
  hidePageIntro.hidden = true;
  hideDrinkIntro.hidden = true;
  //console.log(userInput.value);
  showWeather();
});

function showWeather() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7de34768bmsh79c759a3fda7f84p10855fjsna03ff029a493",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  var yourCityAPI =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=" + userInput.value;
  fetch(yourCityAPI, options)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response.current.condition.icon)
      // console.log(response.current.temp_f)
      // console.log(response.current.humidity)
      // console.log(response.current.wind_mph)
      // console.log(response.current.feelslike_f)
      localStorage.setItem("weather icon", response.current.condition.icon);
      localStorage.setItem("current temp", response.current.temp_f);
      localStorage.setItem("current humidity", response.current.humidity);
      localStorage.setItem(
        "current wind conditions",
        response.current.wind_mph
      );
      localStorage.setItem("current feels like", response.current.feelslike_f);
    })
    .catch((err) => console.error(err));
  //var getIcon = localStorage.getItem('weather icon');
  //displayIcon.appendChild(getIcon);
  displayTemp.textContent = localStorage.getItem("current temp");
  displayHumidity.textContent = localStorage.getItem("current humidity");
  displayWind.textContent = localStorage.getItem("current wind conditions");
  displayFeelsLike.textContent = localStorage.getItem("current feels like");
}

//ingredientSearchBtn.addEventListener("click", )

function showCocktails() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7de34768bmsh79c759a3fda7f84p10855fjsna03ff029a493",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };
  var cocktailIngredientAPI =
    "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + userInput;
  fetch(cocktailIngredientAPI, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  //if (user input = bourbon){
  //displayBourbonDrinks();
  //};
  //else if (user input = rum){
  //displayRumDrinks();
  //};
  //else (){
  //displayVodkaDrinks();
  //};
}

//function displayBourbonDrinks(){
//
//};
//function displayBourbonDrinks(){
//
//};
//function displayBourbonDrinks(){
//
//};

//localstorage.setItem("previous search", user input);
//pastSearch = localstorage.getItem("previous search")
ingredientSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  cardSection.style.display = "block";
  storePreviousSearch();
  scrollTo(0, 500);
});

function storePreviousSearch() {
  var logToPastSearches = {
    itemSearched: ingredientDropdown.value,
  };
  var searchHistoryCard = JSON.parse(localStorage.getItem("previousSearch"));
  if (!Array.isArray(searchHistoryCard)) {
    searchHistoryCard = [];
  } 
  if (searchHistoryCard.length >= 5) {
    searchHistoryCard = searchHistoryCard.slice(0, 5);
  } 
    searchHistoryCard.unshift(logToPastSearches);
    localStorage.setItem("previousSearch", JSON.stringify(searchHistoryCard));
    rebuildHistory();
    console.log(logToPastSearches);
    console.log(searchHistoryCard);
  }


// append search history to page


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function rebuildHistory() {
  var searchHistoryDiv = document.getElementById("search-history-container");
  var storedSearches = JSON.parse(localStorage.getItem("previousSearch"));
  removeAllChildNodes(searchHistoryDiv);
  for (let i = 0; i < storedSearches.length; i++) {
    let newChild = document.createElement("p");
    newChild.innerHTML = storedSearches[i].itemSearched;
    searchHistoryDiv.appendChild(newChild);
    }
  }

