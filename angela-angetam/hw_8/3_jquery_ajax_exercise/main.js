/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

var apiKey = "c493be0b24471fe2dbe171831c538ec2";
var lat = "37.7749";
var long = "-122.4194";
var openUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=" + apiKey;
var darkApi = "10761f99f45da312a3b17366adf913f2";
var darkUrl = "https://api.darksky.net/forecast/" + darkApi + "/" + lat + "," + long;

var $openButton = $("<button>").html("OpenWeatherMap").addClass("open");
var $darkSkyButton = $("<button>").html("DarkSky").addClass("dark");

$("body").append($openButton).append($darkSkyButton);

function getTemp(id) {
  var id = $(this).attr("class");
  var url = id + "Url";
  $.ajax({
    url: url,
    dataType: "jsonp",
    jsonCallback: "jsonp",
    success: function useData(data){
      var far;
      var cel;
      if (id = "dark") {
        far = data.currently.temperature;
        cel = (far-32)*(5/9);
      } else if (id = "open") {
        far = data.main.temp*(9/5)-459.67;
        cel = data.main.temp-273.15;
      }
      console.log("The temperature in San Francisco is "  + Math.ceil(far) + "°F \(" + Math.ceil(cel) + "°C\).");
    }
  });
};

$("button").on("click", getTemp);

