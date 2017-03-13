/*

- Sign up for openweathermap.org and generate an API key. //5f2dac27849bb3ca715eaa550e473370

- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';


$("#weatherButton").on("click", function(event) {
	event.preventDefault();
	console.log("test");
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = '&APPID=5f2dac27849bb3ca715eaa550e473370'
	var city = $("#cityInput").val();
	console.log(city);

$.ajax({
	url: weatherUrl+city+apiKey,
	data: {
		format: 'json'
	},
	success: function(response) {
		var kelvinTemp = response.main.temp;
		var kelvinToFarenheit = (1.8*(kelvinTemp - 273) + 32).toFixed(2);
		$("#temperatureText").append("The temperature in "+city+ " is "+kelvinToFarenheit);
		console.log(response.main.temp);
	}
});

});
//used darksky api for forecast summary instead of temperature. when you click the forecast button (#darksky) it returns the forecast for los angeles
$("#darkSky").on("click", function(event) {
	event.preventDefault();
$.ajax({
    url: "https://api.darksky.net/forecast/3c2cddc4ac8011a29e65c54209ddc800/37.8267,-122.4233",
    dataType: "jsonp",
    data: {
        format: "json"
    },

    success: function(response) {
    	$("#darkSkyText").append("The forecast in Los Angeles is "+response.daily.summary);
        console.log(response.daily.summary);
    }
});
});



