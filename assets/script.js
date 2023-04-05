//API key for OpenWeatherMap
const openWeatherKey = "d8b9c9f29acf75b9bc89cdc565bacf19";

//array to store user search values
var recentSearchesArray = [];

const recentSearchDropdown = document.querySelector("#recent-dropdown");

//invoke so that recent searches are populated after page loads
populateRecentSearchesDropdown();

  //get the recent searches out of local storage
  var recentSearchArray = getRecentSearches();

  // this loop works backwards from the end of the array to ensure that the most recent search is at the top of the dropdown menu
  for (let i = recentSearchArray.length - 1; i >= 0; i--) {
    const search = recentSearchArray[i];
    const newDropdownOption = document.createElement("option");
    newDropdownOption.setAttribute("id", search);
    recentSearchDropdown.appendChild(newDropdownOption);
    newDropdownOption.textContent = search;
  }


//if there is already an array in local storage then parse it and assign to variable "recentSearchesArray"
function getRecentSearches() {
  storedSearches = localStorage.getItem("recentSearches");
  if (storedSearches) {
    recentSearchesArray = JSON.parse(storedSearches);
  }
  return recentSearchesArray;
}

//If the city name does not already exist in the array AND the length of the array reaches 10 items, remove the first (aka the oldest) item in the array and append the new item
function storeRecentSearches(cityName) {
  if (
    recentSearchesArray.includes(cityName) === false &&
    recentSearchesArray.length < 10
  ) {
    recentSearchesArray.push(cityName);
    localStorage.setItem("recentSearches", JSON.stringify(recentSearchesArray));
  } else if (
    recentSearchesArray.includes(cityName) === false &&
    (recentSearchesArray.length = 10)
  ) {
    recentSearchesArray.shift();
    recentSearchesArray.push(cityName);
    localStorage.setItem("recentSearches", JSON.stringify(recentSearchesArray));
  }
}