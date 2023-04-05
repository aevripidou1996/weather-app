//API key for OpenWeatherMap
const openWeatherKey = "d8b9c9f29acf75b9bc89cdc565bacf19";

//array to store user search values
var recentSearchesArray = [];

const recentSearchDropdown = document.querySelector("#recent-dropdown");

//invoke so that recent searches are populated after page loads
populateRecentSearchesDropdown();

