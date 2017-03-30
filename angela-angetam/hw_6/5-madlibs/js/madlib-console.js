var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var favorites = [];

$("#create").on("click", function(){
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    $("#xForY").text('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
})
$("#save").on("click", function(){
    favorites.push($("h1").text());
})
$("#print").on("click", function(){
    $("#favorites").text('Favorites: ' + favorites);
})