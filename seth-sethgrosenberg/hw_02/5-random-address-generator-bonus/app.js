/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var createAddress = function(streetNumber, streetName, cityName, stateName, zip) {
	this.streetNumber = streetNumber;
	this.streetName = streetName;
	this.cityName = cityName;
	this.stateName = stateName;
	this.zip = zip;
};

var address1 = new createAddress(2810, "Fillmore", "SF", "CA", 94123);
var address2 = new createAddress(18, "Dumfries Pl", "Winnipeg", "MB", 55555);
var address3 = new createAddress(8, "Octavia", "SF", "CA", 94102);
var address4 = new createAddress(1966, "Pacific", "SF", "CA", 94109);

var addressBook = [address1, address2, address3, address4];

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

var randomAddressGenerator = function() {
console.log(
	addressBook[randomIntFromInterval(0, addressBook.length - 1)].streetNumber + " " +
	addressBook[randomIntFromInterval(0, addressBook.length - 1)].streetName + ", " +
	addressBook[randomIntFromInterval(0, addressBook.length - 1)].cityName + " " +
	addressBook[randomIntFromInterval(0, addressBook.length - 1)].stateName + ", " +
	addressBook[randomIntFromInterval(0, addressBook.length - 1)].zip
	);
};

window.onload = randomAddressGenerator;
