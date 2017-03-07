var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let startupText = document.getElementById("xForY");
let favoritesText = document.getElementById("favorites");
let createButton = document.getElementById("create");
let favoriteButton = document.getElementById("save");
let printButton = document.getElementById("print");

let favorites = [];

function generateStartup() {
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
  return 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}

function updateStartup() {
  startupText.textContent = "";
  let madlib = generateStartup();
  let madlibNode = document.createTextNode(madlib);
  startupText.appendChild(madlibNode);  
}

function favoriteStartup() {
  let startup = startupText.firstChild;

  if (favorites[favorites.length - 1] != startup.textContent) {
    favorites.push(startup.textContent);
  }  
}

function printFavorites() {
  favoritesText.textContent = "";
  let favList = document.createElement("ol");

  favorites.forEach(function(favorite) {
    let favItem = document.createElement("li");
    let favItemText = document.createTextNode(favorite);
    favItem.appendChild(favItemText);
    favList.appendChild(favItem);
  });

  favoritesText.appendChild(favList);
}

createButton.addEventListener("click", updateStartup);
favoriteButton.addEventListener("click", favoriteStartup);
printButton.addEventListener("click", printFavorites);