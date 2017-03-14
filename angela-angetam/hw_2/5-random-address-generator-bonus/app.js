/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/
var i;
var stNum = [12345, 52345, 12575, 12453];
var stName = ['Apple Street', 'Pear Way', 'Pineapple Lane', 'Grape Street'];
var city = ['San Francisco', 'San Mateo', 'Oakland', 'Berkeley'];
var state = ['CA', 'NV', 'NY', 'OR'];
var zip = [55555, 66666, 77777, 88888];
var i = Math.floor(Math.random() * stNum.length);

function randAddress() {
    console.log(stNum[i] + " " + stName[i] + ", " + city[i] + ", " + state[i] + " " + zip[i]);
};
randAddress(); 
/*
Is it possible to do an array of arrays and then use the foreach so a random number is generated for each array?
var i;
var all = [stNum[i],stName[i]];
[stNum, stName].forEach(function(element) {
    var i = Math.floor(Math.random() * stNum.length);
    return element[i];
});
console.log(stNum[i] + " " + stName[i]);
*/