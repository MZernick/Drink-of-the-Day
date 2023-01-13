var ingredientSearchBtn = document.querySelector("#ingredient-search-button");
var citySearchBtn = document.querySelector("#search-button");
var hidePageIntro = document.querySelector("#weather-hide-intro");
var hideDrinkIntro = document.querySelector("#ingredient-text");
var cardSection = document.querySelector("#card-section");

cardSection.style.display= "none";

// fetch weather API
citySearchBtn.addEventListener("click", function(event){
    event.preventDefault();
    cardSection.style.display = "block";
    hidePageIntro.hidden = true;
    hideDrinkIntro.hidden = true;
    showWeather();
});

function showWeather(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f7de34768bmsh79c759a3fda7f84p10855fjsna03ff029a493',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Houston', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

};

//fetch cocktail API here?
//ingredientSearchBtn.addEventListener("click", )
//hide middle paragraph
//if (user input = bourbon){
    //displayBourbonDrinks();
//};
//else if (user input = rum){
    //displayRumDrinks();
//};
//else (){
    //displayVodkaDrinks();
//};

//should all of these be a fetch function with a specified path to their respective ingredients?
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