/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:

    34578 Dolphin Street, Wonka NY, 44506
*/

var randElem = function(myArr){
  return myArr[Math.floor(Math.random() * myArr.length)];
};

window.onload = function addressGenerator() {
  var streetNumber = randElem([444, 257, 4070, 64, 30, 29, 3456]);
  var streetName = randElem(["Lexington Ave", "Monterey Ave", "Vestal Pkwy", "Seminary Ave", "Alma St", "Dorland St", "Hyde St"]);
  var cityName = randElem(["New York", "New Rochelle", "Vestal", "Binghamton", "San Francisco"]);
  var stateName = randElem(["NY", "CA"]);
  var zipCode = randElem([10801, 20001, 13784, 94114, 94117, 94115]);
  console.log(streetNumber + ' ' + streetName + '\n' + cityName + ', ' + stateName + ' ' + zipCode);
}
