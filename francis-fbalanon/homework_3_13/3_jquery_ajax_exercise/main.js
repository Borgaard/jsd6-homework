/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';
var $processButton = $("#theButton");
var $cityValue = $("#enterCity");
var $stateValue = $("#enterState");
var apiKey = "&appid=********************************";
var city = "dallas";
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

var darkUrl = "https://api.darksky.net/forecast/";
var darkKey ="********************************/";

 
$processButton.on("click", function(event) {
    var cityInput = $cityValue.val();
    var stateInput = $stateValue.val();
      console.log(cityInput + " " + stateInput);  
      event.preventDefault();
    
      $.ajax({
          url: weatherUrl+cityInput+stateInput+apiKey,
          data: {
          format: 'json'
            },
          success: function (response) {
            var temperature = Math.floor((response.main.temp * (9/5)) - 459.67); 
            var newHeading = document.createElement("h1");
            var newText = document.createTextNode("OpenWeatherMap says the temperature in " + cityInput + ", " + stateInput + " is " + temperature + " degrees fahrenheit");
            newHeading.appendChild(newText);
            document.body.appendChild(newHeading);
            var lat = response.coord.lat;
            var lon = response.coord.lon;
            var coord = lat + "," + lon;

                $.ajax({
                      url: darkUrl+darkKey+coord,
                        dataType: "jsonp",
                      success: function (response) {
                      var temperature = response.currently.apparentTemperature; 
                      var newHeading = document.createElement("h1");
                      var newText = document.createTextNode("Dark Sky says the temperature in " + cityInput + ", " + stateInput + " is " + temperature + " degrees fahrenheit");
                       newHeading.appendChild(newText);
                       document.body.appendChild(newHeading);
                      }
                });
            }
      });
 });
