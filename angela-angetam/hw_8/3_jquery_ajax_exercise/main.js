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
var far;
var cel;

$("body").append($openButton).append($darkSkyButton);

function darkTemp() {
  $.ajax({
    url: darkUrl,
    dataType: "jsonp",
    success: function useData(data){
      far = data.currently.temperature;
      cel = (far-32)*(5/9);
      console.log("The temperature in San Francisco is "  + Math.ceil(far) + "°F \(" + Math.ceil(cel) + "°C\).");
    }
  });
};
function openTemp() {
  $.ajax({
    url: openUrl,
    dataType: "jsonp",
    success: function useData(data){
        far = data.main.temp*(9/5)-459.67;
        cel = data.main.temp-273.15;
      console.log("The temperature in San Francisco is "  + Math.ceil(far) + "°F \(" + Math.ceil(cel) + "°C\).");
    }
  });
};
// $(".open").on("click", getTemp(openUrl));
$(".open").on("click", openTemp);
// $(".dark").on("click", getTemp(darkUrl));
$(".dark").on("click", darkTemp);

