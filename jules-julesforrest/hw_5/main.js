/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

var weatherUrlTemplate = "http://api.openweathermap.org/data/2.5/weather?q={CITY}&appid=";
var apiKey = "8996fdf9509ad6cf7bda4e06312fa828";



$( "#city-submit" ).click(function(event) {
  event.preventDefault();
  var citySelected = $("#city-selector").val();
  var weatherUrl = weatherUrlTemplate;
  weatherUrl = weatherUrl.replace(/{CITY}/, citySelected);
  $.ajax({
    url: weatherUrl + apiKey,
    data: {
      format: "JSON"
    },
    success: function(response) {
      var responseData = response;
      var fahrenheit = Math.floor((9 / 5) * (responseData.main.temp - 273) + 32);
      var cityName = (responseData.name);
      var readOut = (cityName + ": " + fahrenheit + "°F");
      $("#result").text(readOut);
    }
  });
  citySelected = $("#city-selector").val('');
});
