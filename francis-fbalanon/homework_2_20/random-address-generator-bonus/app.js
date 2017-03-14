/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumber = [514, 323, 421, 351, 231, 545, 1345, 9045, 12312, 3423];
var streetName = ["Main Street", "Townsend Avenue", "Oak Avenue", "Pine Street", "Cedar Lane", "Maple Road", "Lake Drive", "Hill Road", "Elm Avenue", "Embarcadero Boulevard"];
var cityName = ["Greenville", "Fairview", "Washington", "Madison", "Franklin", "Salem", "Springfield", "Bristol", "Clinton", "Georgetown"];
var stateName = ["CA", "NY", "TX", "FL", "TN", "NV", "NC", "IL", "HI", "GA"];
var zipCode = [33134, 15932, 50381, 30456, 50123, 69301, 70693, 90123, 86950, 21201];

var addyGen = function () {
    console.log(streetNumber[Math.floor(Math.random() * 10)] + " " + streetName[Math.floor(Math.random() * 10)] + ", " + cityName[Math.floor(Math.random() * 10)] + ", " + stateName[Math.floor(Math.random() * 10)] + ", " + zipCode[Math.floor(Math.random() * 10)]);
}

addyGen();