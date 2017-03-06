var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var response
var madLib = function(){
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  response = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
  return response;
};
var savedList = [];


$("#create").on('click', function(event) {
  $("#xForY").text(madLib());

});

$("#save").on('click', function(event) {
  savedList.push(response);
});

$("#print").on('click', function(event) {
  $("#favorites").text("Favorites");
  $.each(savedList, function(index) {
   $('<li/>').text(savedList[index]).appendTo("#favoriteStartups");
  })
  savedList = [];
});
