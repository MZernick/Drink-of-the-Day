var ingredientSearchBtn = document.querySelector("#ingredient-search-button");
var ingredientDropdown = document.querySelector("#ingredientDropdown");
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

citySearchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  cardSection.style.display = "flex";
  weatherCard.style.display = "flex";
  hidePageIntro.hidden = true;
  weatherAPI();
});

function weatherAPI(event) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7de34768bmsh79c759a3fda7f84p10855fjsna03ff029a493",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  var yourCityAPI = "https://weatherapi-com.p.rapidapi.com/current.json?q=" + userInput.value;
  fetch(yourCityAPI, options)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response.current.condition.icon)
      // console.log(response.current.temp_f)
      // console.log(response.current.humidity)
      // console.log(response.current.wind_mph)
      // console.log(response.current.feelslike_f)
      displayIcon.src = "https:" + response.current.condition.icon;
      displayTemp.textContent = response.current.temp_f;
      displayHumidity.textContent = response.current.humidity;
      displayWind.textContent = response.current.wind_mph;
      displayFeelsLike.textContent = response.current.feelslike_f;
      localStorage.setItem("current temp", response.current.temp_f);
      kindOfDay();
    })
    .catch((err) => console.error(err));
  // var getIcon = displayIcon.href = "https://" + localStorage.getItem('weather icon');
  // displayIcon = getIcon;
  // displayIcon.setAttribute("src", ("https://" + localStorage.getItem("weather icon")));
  // document.getElementById('#tempicon').href = getIcon;
  //console.log(displayIcon);
}

// function displayWeather(){//still displaying previous city instead of current
//     displayIcon.attributes('href', "https://" + localStorage.getItem('weather icon'));
//     displayTemp.textContent = localStorage.getItem('current temp');
//     displayHumidity.textContent= localStorage.getItem('current humidity');
//     displayWind.textContent = localStorage.getItem('current wind conditions');
//     displayFeelsLike.textContent = localStorage.getItem('current feels like');
// }

function kindOfDay() {
  var currentTemp = localStorage.getItem("current temp");
  if (currentTemp < 50) {
    hideDrinkIntro.textContent =
      "It looks like a great day for a bourbon drink!";
      displayBourbonDrinks();
  } else if (currentTemp > 50 && currentTemp < 80) {
    hideDrinkIntro.textContent =
      "It looks like a perfect day for a vodka drink!";
      displayVodkaDrinks();
  } else if (currentTemp > 79) {
    hideDrinkIntro.textContent = "It looks like a fun day for a rum drink!";
    displayRumDrinks();
  }
}

// Ingredient search 
function populateIngredientEl(id, measure, recipeIngredient) {   
  var el = document.getElementById(id);
   if (recipeIngredient != null) {
    if (measure === null) {
      measure = "";}
   el.textContent = measure + " " + recipeIngredient;
     el.style.display = "list-item";
   }
   else {
     el.style.display = "none";
   }
 }
 
 function createDrinkCard1(data) {
   document.querySelector("#drink1-name").textContent = data.drinks[0].strDrink;
   var drinkThumb = document.querySelector("#drink1-img");
   drinkThumb.src = data.drinks[0].strDrinkThumb;
   populateIngredientEl("drink1-ing1", data.drinks[0].strMeasure1, data.drinks[0].strIngredient1);
   populateIngredientEl("drink1-ing2", data.drinks[0].strMeasure2, data.drinks[0].strIngredient2);
   populateIngredientEl("drink1-ing3", data.drinks[0].strMeasure3, data.drinks[0].strIngredient3);
   populateIngredientEl("drink1-ing4", data.drinks[0].strMeasure4, data.drinks[0].strIngredient4);
   populateIngredientEl("drink1-ing5", data.drinks[0].strMeasure5, data.drinks[0].strIngredient5);
   populateIngredientEl("drink1-ing6", data.drinks[0].strMeasure6, data.drinks[0].strIngredient6);
   populateIngredientEl("drink1-ing7", data.drinks[0].strMeasure7, data.drinks[0].strIngredient7);
   populateIngredientEl("drink1-ing8", data.drinks[0].strMeasure8, data.drinks[0].strIngredient8);
   populateIngredientEl("drink1-ing9", data.drinks[0].strMeasure9, data.drinks[0].strIngredient9);
   populateIngredientEl("drink1-ing10", data.drinks[0].strMeasure10, data.drinks[0].strIngredient10);
   populateIngredientEl("drink1-ing11", data.drinks[0].strMeasure11, data.drinks[0].strIngredient11);
   populateIngredientEl("drink1-ing12", data.drinks[0].strMeasure12, data.drinks[0].strIngredient12);
   populateIngredientEl("drink1-ing13", data.drinks[0].strMeasure13, data.drinks[0].strIngredient13);
   populateIngredientEl("drink1-ing14", data.drinks[0].strMeasure14, data.drinks[0].strIngredient14);
   populateIngredientEl("drink1-ing15", data.drinks[0].strMeasure15, data.drinks[0].strIngredient15);
   document.querySelector("#drink1-instructions").textContent = data.drinks[0].strInstructions;
 }
 
 function createDrinkCard2(data) {
   document.querySelector("#drink2-name").textContent = data.drinks[0].strDrink;
   var drinkThumb = document.querySelector("#drink2-img");
   drinkThumb.src = data.drinks[0].strDrinkThumb;
   populateIngredientEl("drink2-ing1", data.drinks[0].strMeasure1, data.drinks[0].strIngredient1);
   populateIngredientEl("drink2-ing2", data.drinks[0].strMeasure2, data.drinks[0].strIngredient2);
   populateIngredientEl("drink2-ing3", data.drinks[0].strMeasure3, data.drinks[0].strIngredient3);
   populateIngredientEl("drink2-ing4", data.drinks[0].strMeasure4, data.drinks[0].strIngredient4);
   populateIngredientEl("drink2-ing5", data.drinks[0].strMeasure5, data.drinks[0].strIngredient5);
   populateIngredientEl("drink2-ing6", data.drinks[0].strMeasure6, data.drinks[0].strIngredient6);
   populateIngredientEl("drink2-ing7", data.drinks[0].strMeasure7, data.drinks[0].strIngredient7);
   populateIngredientEl("drink2-ing8", data.drinks[0].strMeasure8, data.drinks[0].strIngredient8);
   populateIngredientEl("drink2-ing9", data.drinks[0].strMeasure9, data.drinks[0].strIngredient9);
   populateIngredientEl("drink2-ing10", data.drinks[0].strMeasure10, data.drinks[0].strIngredient10);
   populateIngredientEl("drink2-ing11", data.drinks[0].strMeasure11, data.drinks[0].strIngredient11);
   populateIngredientEl("drink2-ing12", data.drinks[0].strMeasure12, data.drinks[0].strIngredient12);
   populateIngredientEl("drink2-ing13", data.drinks[0].strMeasure13, data.drinks[0].strIngredient13);
   populateIngredientEl("drink2-ing14", data.drinks[0].strMeasure14, data.drinks[0].strIngredient14);
   populateIngredientEl("drink2-ing15", data.drinks[0].strMeasure15, data.drinks[0].strIngredient15);
   document.querySelector("#drink2-instructions").textContent = data.drinks[0].strInstructions;
 }
 
 function createDrinkCard3(data) {
   document.querySelector("#drink3-name").textContent = data.drinks[0].strDrink;
   var drinkThumb = document.querySelector("#drink3-img");
   drinkThumb.src = data.drinks[0].strDrinkThumb;
   populateIngredientEl("drink3-ing1", data.drinks[0].strMeasure1, data.drinks[0].strIngredient1);
   populateIngredientEl("drink3-ing2", data.drinks[0].strMeasure2, data.drinks[0].strIngredient2);
   populateIngredientEl("drink3-ing3", data.drinks[0].strMeasure3, data.drinks[0].strIngredient3);
   populateIngredientEl("drink3-ing4", data.drinks[0].strMeasure4, data.drinks[0].strIngredient4);
   populateIngredientEl("drink3-ing5", data.drinks[0].strMeasure5, data.drinks[0].strIngredient5);
   populateIngredientEl("drink3-ing6", data.drinks[0].strMeasure6, data.drinks[0].strIngredient6);
   populateIngredientEl("drink3-ing7", data.drinks[0].strMeasure7, data.drinks[0].strIngredient7);
   populateIngredientEl("drink3-ing8", data.drinks[0].strMeasure8, data.drinks[0].strIngredient8);
   populateIngredientEl("drink3-ing9", data.drinks[0].strMeasure9, data.drinks[0].strIngredient9);
   populateIngredientEl("drink3-ing10", data.drinks[0].strMeasure10, data.drinks[0].strIngredient10);
   populateIngredientEl("drink3-ing11", data.drinks[0].strMeasure11, data.drinks[0].strIngredient11);
   populateIngredientEl("drink3-ing12", data.drinks[0].strMeasure12, data.drinks[0].strIngredient12);
   populateIngredientEl("drink3-ing13", data.drinks[0].strMeasure13, data.drinks[0].strIngredient13);
   populateIngredientEl("drink3-ing14", data.drinks[0].strMeasure14, data.drinks[0].strIngredient14);
   populateIngredientEl("drink3-ing15", data.drinks[0].strMeasure15, data.drinks[0].strIngredient15);
   document.querySelector("#drink3-instructions").textContent = data.drinks[0].strInstructions;
 }

//  API fetch for drink information
function displayRumDrinks() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7de34768bmsh79c759a3fda7f84p10855fjsna03ff029a493",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };
  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=mojito",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard1(data);
    })
    .catch((err) => console.error(err));

  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=Barracuda",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard2(data);
    })
    .catch((err) => console.error(err));
  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=Rum%20Punch",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard3(data);
    })
    .catch((err) => console.error(err));
}

function displayVodkaDrinks() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7de34768bmsh79c759a3fda7f84p10855fjsna03ff029a493",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };
  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=Figgy%20Thyme",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard1(data);
    })
    .catch((err) => console.error(err));

  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=Bloody%20Mary",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard2(data);
    })
    .catch((err) => console.error(err));
  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=Moscow%20Mule",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard3(data);
    })
    .catch((err) => console.error(err));
}

function displayBourbonDrinks() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b1b5dc1915msh62167d705a015f4p13d9bfjsn9c22f1a9e094",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=Kentucky%20B%20And%20B",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard1(data);
    })
    .catch((err) => console.error(err));

  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=Egg%20Nog%20%234",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard2(data);
    })
    .catch((err) => console.error(err));
  fetch(
   "https://the-cocktail-db.p.rapidapi.com/search.php?s=classic%20old-fashioned",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrink);
      createDrinkCard3(data);
      })
    .catch((err) => console.error(err));
}

// event listener for ingredient search button
ingredientSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (ingredientDropdown.value == " ") {
    return;
  }
  if (ingredientDropdown.value == "Bourbon") {
    displayBourbonDrinks();
  }
  if (ingredientDropdown.value == "Vodka") {
    displayVodkaDrinks();
  }
  if (ingredientDropdown.value == "Rum") {
    displayRumDrinks();
  }
  cardSection.style.display = "flex";
  storePreviousSearch();
  scrollTo(0, 500);
});

// Store recent ingredient searched to client-side storage
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
}

// append ingredient search history to page as buttons
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
    let newChild = document.createElement("button");
    newChild.setAttribute("content", "test content");
    newChild.setAttribute("class", "button is-fullwidth");
    newChild.textContent = storedSearches[i].itemSearched;
    searchHistoryDiv.appendChild(newChild);

    newChild.addEventListener("click", function () {
      console.log (newChild.innerHTML);
      if ((newChild.innerHTML === "Bourbon")) {
        displayBourbonDrinks();
      } else if ((newChild.innerHTML === "Vodka")) {
        displayVodkaDrinks();
      } else if ((newChild.innerHTML === "Rum")) {
        displayRumDrinks();
      }
    });
  }
}
