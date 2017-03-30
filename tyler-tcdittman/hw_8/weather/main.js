/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';



$("#openW").on("click", function(){
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?id=5391959";
  var apiKey = "b5c1cf8a52b0a8c8ebfc5154a0b64c00";
  $.ajax({
    url: weatherUrl + "&APPID=" + apiKey,
    data: {
      format: 'json'
    },
    success: function(response){
      var kelv = response.main.temp;
      var far = (9/5)*(kelv - 273) + 32;
      console.log("It's " + Math.floor(far) + " degrees F in SF right now, according to the fine people at openweathermap.org")
    }
  })
})
// based on lon: -122.42, lat: 37.77

$("#darkS").on("click", function(){
  $.ajax({
    url: "https://api.darksky.net/forecast/9c9b36fa3e120693a004809cd34d95c0/37.77,-122.42",
    data: {
      format: 'json'
    },
    success: function(response){
      var sanFranTemp = response.currently.temperature;
      console.log("It is currently " + sanFranTemp + " degrees F in SF right now, according to DarkSky.net");
    }
  })
})
//original coordinates for "SF": 37.7749° N, 122.4194° W
// adjusted to be equal to openweathermap.org's coordinates for SF
