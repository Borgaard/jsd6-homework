/*
var startupX = ['Uber', 'Zendesk', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Partying!!!'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
*/
var startupX = ['Uber', 'Zendesk', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Partying!!!'];

var companyText;

var createButton = document.getElementById('create');
createButton.onclick = function(event){
  document.getElementById("xForY").innerHTML = "";
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  companyText = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  var companyTextNode = document.createTextNode(companyText);
  document.getElementById("xForY").appendChild(companyTextNode);
};

var favesArray = [];
var saveButton = document.getElementById('save');
saveButton.onclick = function(event){
  favesArray.push(companyText);
  console.log(favesArray);
};

var printButton = document.getElementById('print');
printButton.onclick = function(event){
  var favesTextNode = document.createTextNode(favesArray.join("\n"));
  document.getElementById("favorites").appendChild(favesTextNode);
};

// can't get the new line to work in join("\n")
