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

citySearchBtn.addEventListener("click", function(event){
    event.preventDefault();
    cardSection.style.display = "flex";
    weatherCard.style.display = "flex";
    hidePageIntro.hidden = true;
    //hideDrinkIntro.hidden = true;
    //console.log(userInput.value);
    weatherAPI();
    //displayWeather();
    kindOfDay();
});

function weatherAPI(event){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f7de34768bmsh79c759a3fda7f84p10855fjsna03ff029a493',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    var yourCityAPI = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+ userInput.value ;
    fetch(yourCityAPI, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response.current.condition.icon)
            // console.log(response.current.temp_f)
            // console.log(response.current.humidity)
            // console.log(response.current.wind_mph)
            // console.log(response.current.feelslike_f)
            localStorage.setItem('weather icon', response.current.condition.icon)
            localStorage.setItem('current temp', response.current.temp_f)
            localStorage.setItem('current humidity', response.current.humidity)
            localStorage.setItem('current wind conditions', response.current.wind_mph)
            localStorage.setItem('current feels like', response.current.feelslike_f)
        })
        .catch(err => console.error(err));
        //var getIcon = displayIcon.href = "https://" + localStorage.getItem('weather icon');
        //displayIcon = getIcon;
        //displayIcon.setAttribute("src", ("https://" + localStorage.getItem("weather icon")));
        //document.getElementById('#tempicon').href = getIcon;
        displayTemp.textContent = localStorage.getItem('current temp');
        displayHumidity.textContent= localStorage.getItem('current humidity');
        displayWind.textContent = localStorage.getItem('current wind conditions');
        displayFeelsLike.textContent = localStorage.getItem('current feels like');
        console.log(displayIcon);
};

// function displayWeather(){//still displaying previous city instead of current
//     displayIcon.attributes('href', "https://" + localStorage.getItem('weather icon'));
//     displayTemp.textContent = localStorage.getItem('current temp');
//     displayHumidity.textContent= localStorage.getItem('current humidity');
//     displayWind.textContent = localStorage.getItem('current wind conditions');
//     displayFeelsLike.textContent = localStorage.getItem('current feels like');
// }

function kindOfDay (event){
    event.preventDefault();
    var currentTemp = localStorage.getItem('current temp');
    if (currentTemp < 50){
        hideDrinkIntro.textContent = "It looks like a great day for a bourbon drink!";
    }
    else if (currentTemp > 50 && currentTemp<80){
        hideDrinkIntro.textContent = "It looks like a perfect day for a vodka drink!";
    }
    else if (currentTemp>79){
        hideDrinkIntro.textContent = "It looks like a fun day for a rum drink!";
    }
};

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

    
    // function determineIngredient () {
    //   if 
    // }
  //if (user input = bourbon){
  //displayBourbonDrinks();
  //};
  //else if (user input = rum){
  //displayRumDrinks();
  //};
  //else (){
  //displayVodkaDrinks();
  //};
};

//function displayBourbonDrinks(){
//
//};
//function displayVodkaDrinks(){
//
//};
//function displayRumDrinks(){
//
//};

//This is the 'Who cares about the weather, let's directly search an ingredient' section. 
  // localstorage.setItem("previous search", user input);
  //pastSearch = localstorage.getItem("previous search")
ingredientSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (ingredientDropdown.value == "") {
    return;
  }
  cardSection.style.display = "flex";
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
  if (searchHistoryCard.length >= 4) {
    searchHistoryCard = searchHistoryCard.slice(0, 4);
  }
  searchHistoryCard.unshift(logToPastSearches);
  localStorage.setItem("previousSearch", JSON.stringify(searchHistoryCard));
  rebuildHistory();
  console.log(logToPastSearches);
  console.log(searchHistoryCard);
};

// append search history to page

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

function rebuildHistory() {
  var searchHistoryDiv = document.getElementById("search-history-container");
  var storedSearches = JSON.parse(localStorage.getItem("previousSearch"));
  removeAllChildNodes(searchHistoryDiv);
  for (let i = 0; i < storedSearches.length; i++) {
    let newChild = document.createElement("button");
    newChild.setAttribute("content", "test content");
    newChild.setAttribute("class", "button is-fullwidth");
    newChild.textContent = storedSearches[i].itemSearched;
    searchHistoryDiv.appendChild(newChild);
  }
};
