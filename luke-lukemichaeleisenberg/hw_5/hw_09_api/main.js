/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco";
var apiKey = "&APPID=f840d28e6202e667491e9dd129840cec";

$.ajax({
  url : weatherUrl+apiKey,
  dataType: "jsonp",
  success: function(response) {
    console.log("Open Weather Map temperature: " + response.main.temp);
  }
});

var darkSkyApiKey = "e2176eea4e11be86e168f094b691d59c";
var darkSkyWeatherUrl = "https://api.darksky.net/forecast/" + darkSkyApiKey + "/37.8267,-122.4233";

$.ajax({
  url : darkSkyWeatherUrl,
  dataType: "jsonp",
  success: function(response) {
    console.log("Dark Sky temperature: " + response.currently.temperature);
  }
});
