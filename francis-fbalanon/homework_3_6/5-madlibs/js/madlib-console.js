var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var favoritesArray = [];


var createButton = document.getElementById("create");
var favoriteButton = document.getElementById("save");
var printButton = document.getElementById("print");


createButton.onclick = function(event) {
    event.preventDefault();
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    var randomStartUp = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    var createH1 = document.createElement("h1");
    var inputText = document.createTextNode(randomStartUp);
    createH1.appendChild(inputText);
    document.getElementById("xForY").appendChild(createH1);
    favoriteButton.onclick = function() {
        favoritesArray.push(randomStartUp);
    };
    printButton.onclick = function() {
        for (var i = 0; i < favoritesArray.length; i++) {
            var createH2 = document.createElement("h2");
            var inputFav = document.createTextNode(favoritesArray[i]);
            
            createH2.appendChild(inputFav);
            document.getElementById("favorites").appendChild(createH2);         
        };
    };
};