/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:

    34578 Dolphin Street, Wonka NY, 44506
*/
var streetNumber = [1234, 1600, 1, 1093, 2504, 1019, 989];
var streetName = ["Market Street", "Pennsylvania Avenue", "Bourbon St.", "Mission Street"];
var cityName = ["San Francisoc", "Napa", "Los Angeles", "Portland", "Seattle"];
var stateName = ["CA", "OR", "NY", "HI", "FL"];
var zipCode = [94558, 35928, 93727, 39573, 33985, 11203];

var i = Math.floor(Math.random()*(streetNumber.length))
var j = Math.floor(Math.random()*(streetName.length))
var k = Math.floor(Math.random()*(cityName.length))
var l = Math.floor(Math.random()*(stateName.length))
var m = Math.floor(Math.random()*(zipCode.length))
// I'm guessing there is a more automated way to select a random element from each array, but I'm still a baby stack developer

console.log(streetNumber[i] + " " + streetName[j] + ", " + cityName[k] + " " + stateName[l] + ", " + zipCode[m]);
