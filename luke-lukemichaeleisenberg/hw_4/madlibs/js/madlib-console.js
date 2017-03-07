var createButton = document.getElementById("create");
var favoriteList = [];

createButton.onclick = function(event) {
  var startUpString = generateStartup();
  updateHeaderString(startUpString);
}

var saveButton = document.getElementById("save");

createButton.onclick = function(event) {
  var startUpString = generateStartup();
  updateHeaderString(startUpString);
}

var createButton = document.getElementById("print");

createButton.onclick = function(event) {
  var startUpString = generateStartup();
  updateHeaderString(startUpString);
}

//Generates and returns a string 'A startup that is X, but for Y'
function generateStartup () {
  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));

  return 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}

//Clears the current text in the header node, then sets the text in the main header to the inputted string
function updateHeaderString (inputString) {
  var headerElement = document.getElementById("xForY");
  var currentTitle = headerElement.childNodes[0];
  var newStringNode = document.createTextNode(inputString);

  if (currentTitle !== undefined)
  {
    headerElement.removeChild(currentTitle);
  }
  headerElement.appendChild(newStringNode);
}
